import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const [close, setClose] = useState(false);
  //user context
  const {user, setUser, logOut} = useContext(AuthContext)
  //sign out button handler
  const handleSignOut = () => {
    logOut()
    .then(() => {
      console.log('Sign-out successful.')
      setUser(null)
    }).catch((error) => {
      console.error(error)
    });
    
  }
  const handleDropdown = () => {
    let target = document.getElementById("nav-link");
    if (target.style.right === "" || target.style.right === "-100%") {
      target.style.display = "flex";
      target.style.right = "0px";
      setClose(!close);
    } else {
      target.style.display = "none";
      target.style.right = "-100%";
      setClose(!close);
    }
  };
  return (
    <nav className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="dropdown-menu">
        <button onClick={handleDropdown}>
          {close ? (
            <FontAwesomeIcon className="close-icon" icon={faClose}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon className="menu-icon" icon={faBars}></FontAwesomeIcon>
          )}
        </button>
      </div>
      <div id="nav-link" className="nav-link">
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link onClick={handleSignOut} to="/login"> Sign Out </Link>
        <Link to="/register">Register</Link>
        <span>{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
