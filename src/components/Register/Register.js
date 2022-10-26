import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import google from "../Login/google.svg";

const Register = () => {
  //navigate
  const navigate = useNavigate();
  //Error stae
  const [error, setError] = useState(null);

  //context
  const { createUser } = useContext(AuthContext);

  //form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm.value;

    if (password.length < 6) {
      setError("Password Must Be 6 Charecters long !");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password not matched !");
      return;
    }

    // console.log(email, password, confirmPassword)
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/shop')
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="container login-container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirmInput">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirmInput"
              name="confirm"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" value="Sign Up" className="btn submit-btn">
              Sign Up
            </button>
          </div>
        </form>
        <div className="new-login">
          {error && <p className="text-danger">{error}</p>}
          <p>
            Already have an account?
            <Link to={"/login"}> Log in now</Link>
          </p>
          <div className="line"></div>
          <div className="or">or</div>
          <div className="form-group">
            <button className="btn google-btn">
              <img className="google-logo" src={google} alt="google" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
