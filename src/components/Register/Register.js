import React from "react";
import { Link } from "react-router-dom";
import google from "../Login/google.svg";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form-submitted");
  };
  return (
    <div className="container login-container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
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
            Already have an account?
            <Link to={"/login"}> Log in now</Link>
          </p>
          <div className="line"></div>
          <div className="or">or</div>
          <div className="form-group">
            <button className="btn google-btn">
              <img className="google-logo" src={google} alt="" srcset="" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
