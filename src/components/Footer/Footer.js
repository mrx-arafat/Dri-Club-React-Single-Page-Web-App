import React from "react";

import logo from "../../img/logo.jpg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img className="image" src={logo} alt="" srcset="" />
      </div>
      <div className="textF">
        <h2>DriClub -Driving Learning Platform </h2>
        <p className="pp">
          We provide a reputable and profes- sional service that aims to give
          you the confidence to pass your test and drive safely on the roads.96%
          of Our Students Pass the Driving Test on. We’re an Experienced,
          Trustworthy, Reliable & Friendly Driving School
        </p>
        <h5>Copyright 2021 &copy; Easin Arafat</h5>
      </div>
    </div>
  );
};

export default Footer;
