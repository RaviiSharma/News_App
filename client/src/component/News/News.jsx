import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";

export const News = (props) => {
  let news = {
    source: {
      id: null,
      name: "N-tv.de",
    },
    author: "n-tv NACHRICHTEN",
    title:
      "Nach Widerspruch des Autobauers: Umweltamt kippt Wasser-Auflage für Tesla",
    description:
      "Das Landesumweltamt Brandenburg kommt Tesla entgegen: Nach dem Widerspruch des US-Autobauers muss er nun keine Analysen mehr zur Einstufung bestimmter Gemische in Wassergefährdungsklassen vorlegen. Tesla kann dies nun selbstständig tun. Umweltverbände kritisi…",
    url: "https://www.n-tv.de/wirtschaft/Umweltamt-kippt-Wasser-Auflage-fuer-Tesla-article23927200.html",
    urlToImage:
      "https://bilder4.n-tv.de/img/incoming/crop23927203/007132564-cImg_16_9-w1200/393788003.jpg",
    publishedAt: "2023-02-18T06:36:26Z",
    content:
      "Das Landesumweltamt Brandenburg kommt Tesla entgegen: Nach dem Widerspruch des US-Autobauers muss er nun keine Analysen mehr zur Einstufung bestimmter Gemische in Wassergefährdungsklassen vorlegen. T… [+2486 chars]",
  };

  const [newsData, setNewsData] = useState([news]);

  function logout() {
    props.setLoginStatus(false);
    localStorage.clear();
  }

  const getNewsData = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-01-18&sortBy=publishedAt",
        {
          headers: {
            "x-api-key": "4230c1b8fb3c4337a609cdcaf59501a3",
          },
        }
      );
      console.log(res.data.articles, "res");
      let newsArr = res.data.articles;
      newsArr = newsArr.filter((elem) => elem.urlToImage !== null);
      setNewsData(newsArr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNewsData();
    console.log(newsData[0], "newsdata");
  }, []);

  return (
    <div className="news">
      <div className="navbar">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          News
        </div>
        <div>
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div className="news-box">
        <div className="news-box-left" style={{ padding: "10px" }}>
          <div className="left-box">
            <img style={{ width: "100%" }} src={newsData[0]?.urlToImage} />
            <div className="text">
              <h2>{newsData[0]?.title}</h2>
              <p>{newsData[0]?.publishedAt}</p>
              <p>{newsData[0]?.content}</p>
            </div>
          </div>
        </div>
        <div className="news-box-right" style={{ padding: "10px" }}>
          <div className="news-cover">
            {newsData.slice(1, 4).map((elem, i) => {
              return (
                <article key={i}>
                  <img
                    style={{ width: "50%", height: "auto" }}
                    src={elem.urlToImage}
                  />
                  <div className="text">
                    <h2>{elem.title}</h2>
                    <p>{elem.publishedAt}</p>
                    <p>{elem.content}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <div className="bottom-card">
        <div class="main">
          <ul class="cards">
            {newsData.slice(4).map((elem, i) => {
              return (
                <li class="cards_item" key={i}>
                  <div class="card">
                    <div class="card_image">
                      <img
                        style={{ maxWidth: "100%", height: "auto" }}
                        src={elem?.urlToImage}
                      />
                    </div>
                    <div class="card_content">
                      <h2 class="card_title">{elem.title}</h2>
                      <p class="card_text">{elem.content}</p>
                      <button class="btn card_btn">Read More</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
