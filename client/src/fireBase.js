import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB_CGRVaJvpWnsq36xqsrb2oDdRA8rg_Ek",
  authDomain: "newsapp-74844.firebaseapp.com",
  projectId: "newsapp-74844",
  storageBucket: "newsapp-74844.appspot.com",
  messagingSenderId: "66651946053",
  appId: "1:66651946053:web:de2654dd4032075e2bf72c",
  measurementId: "G-D1SVTZ2ZQ5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (e, hooks) => {
  e.preventDefault()
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result,"login result")
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const accessToken = result.user.accessToken;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("accessToken", accessToken);
      hooks.setLoginStatus(true)
    })
    .catch((error) => {
      console.log(error);
    });
};
