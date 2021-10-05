import React from "react";
import logo from "../../img/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="" srcset="" />
      </Link>
      <nav className="header">
        <NavLink
          className="item"
          activeStyle={{
            fontWeight: "bold",
            color: "#FDCB24",
          }}
          to="/home"
        >
          Home
        </NavLink>

        <NavLink
          className="item"
          activeStyle={{
            fontWeight: "bold",
            color: "#FDCB24",
          }}
          to="/about"
        >
          About Us
        </NavLink>

        <NavLink
          className="item"
          activeStyle={{
            fontWeight: "bold",
            color: "#FDCB24",
          }}
          to="/services"
        >
          Services
        </NavLink>

        <NavLink
          className="item"
          activeStyle={{
            fontWeight: "bold",
            color: "#FDCB24",
          }}
          to="/faq"
        >
          FAQ
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
