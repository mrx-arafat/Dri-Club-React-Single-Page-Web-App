import { Button } from "@mui/material";
import React from "react";

import img from "../../img/driveSchool.jpg";
import "./HomeSection.css";
//added in Home.js
const HomeSection = () => {
  return (
    <div className="container">
      <img className="img" src={img} alt="drive school" srcset="" />
      <div className="text">
        <h1>Are You Ready?</h1>
        <p>
          Since 1986, throughout the area, School of Driving has earned a
          reputation for responsible and caring driving instruction. Throughout
          USA, Europe and others, wherever you live, with our professional and
          friendly local driving instructors, you’ll enjoy a relaxed, positive
          and encouraging environment as you start your driving lessons and
          learn to drive.
        </p>
        <Button variant="contained">Enroll Now</Button>
      </div>
    </div>
  );
};

export default HomeSection;
