import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const handleDropdown = () => {
        let target  = document.getElementById('nav-link')
        
        if(target.style.visibility === 'hidden'){
            target.style.visibility ='visible';
        }else {
            target.style.visibility ='hidden';
        }
    }
  return (
    <nav className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="dropdown-menu">
        <button onClick={handleDropdown}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
      <div id="nav-link" className="nav-link">
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Header;
