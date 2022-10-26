import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) {
    return <div className="container"><h2>Loading ...</h2></div>
  } else {
    if (user && user.uid) {
      return children;
    }
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
