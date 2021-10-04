import React from "react";
import img1 from "../../img/img-01.jpg";
import "./About.css";
const About = () => {
  return (
    <div>
      <h1>Our Overview</h1>
      <div className="about-container">
        <div className="text-container">
          <img src={img1} alt="" />
          <h2>Affordable, Effective and Convenient Driving Lessons</h2>
          <p className="about-p">
            Safe Drive Driving School has designed classes with the busy student
            in mind. We have a very flexible system of classes that allows
            students to take the classes in any order they wish and at their own
            pace. In some schools you have a very strict schedule for taking the
            classes and this does not work into a lot of the current schedules
            of kids busy lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
