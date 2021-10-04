import React, { useEffect, useState } from "react";
import Services from "../Services/Services";

const LoadServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {services.map((service) => {
        <Services service={service}></Services>;
      })}
    </div>
  );
};

export default LoadServices;
