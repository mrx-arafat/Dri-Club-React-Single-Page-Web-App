import React, { useEffect, useState } from "react";
import LoadServices from "../LoadServices/LoadServices";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1>hello from the services</h1>
      <div className="container">
        {" "}
        {services.map((sv) => (
          <LoadServices sv={sv}></LoadServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
