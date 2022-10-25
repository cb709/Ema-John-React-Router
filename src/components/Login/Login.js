import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import google from './google.svg'
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form-submitted");
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
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn submit-btn">
              Submit
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
                <img className="google-logo" src={google} alt="" srcset="" />
              Log In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
