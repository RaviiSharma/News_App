import { signInWithGoogle } from "../../fireBase";
import "./SignIn.css";

export const SignIn = (props) => {

  return(
    <>
      <div className="form-cover">
        <form>
          <div className="form-header">
            <h1>Login</h1>
          </div>
          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
            />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="submit-button" type="submit">
            Login
          </button>
  
          <button className="login-with-google-btn" onClick={(event)=>signInWithGoogle(event,props)}>
            Sign in with Google
          </button>
        </form>
      </div>
    </>
  );  
}
