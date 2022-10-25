import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import google from "./google.svg";
import { AuthContext } from "../../contexts/UserContext";
const Login = () => {
  //User context
  const { logInWithEmail, setUser } = useContext(AuthContext);
  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
    form.reset();
    console.log(email, password);
  };

  return (
    <div className="container login-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" value="Sign In" className="btn submit-btn">
              Sign In
            </button>
          </div>
        </form>
        <div className="new-login">
          <p>
            Need A Ema John Account?{" "}
            <Link to={"/register"}>Create New Account</Link>
          </p>
          <div className="line"></div>
          <div className="or">or</div>
          <div className="form-group">
            <button className="btn google-btn">
              <img className="google-logo" src={google} alt="google" />
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
