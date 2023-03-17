import "./App.css";
import { useState, useEffect } from "react";
import { SignIn } from "./component/Authentication/SignIn";
import { News } from "./component/News/News"

function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  function changeLoginStatus(value) {
    setLoginStatus(value)
  }

  useEffect(() => {
    let name = localStorage.getItem("name")
    let email = localStorage.getItem("email")
    let accessToken = localStorage.getItem("accessToken")
    if (name && email && accessToken) {
      setLoginStatus(true)
    }
  }, [localStorage])

  if (loginStatus) {
    return (
      <>
        <News setLoginStatus={setLoginStatus} />
      </>
    )
  } else {
    return (
      <>
        <div className="App">
          <SignIn setLoginStatus={setLoginStatus} />
        </div>
      </>
    );
  }
}

export default App;