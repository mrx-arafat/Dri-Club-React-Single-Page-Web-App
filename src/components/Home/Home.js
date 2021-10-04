import React, { useEffect, useState } from "react";
import ServiceHome from "../ServiceHome/ServiceHome";

const Home = () => {
  const [servicesHome, setServicesHome] = useState([]);
  useEffect(() => {
    fetch("./servicesHome.json")
      .then((res) => res.json())
      .then((data) => setServicesHome(data));
  }, []);

  return (
    <div>
      <h1>Enroll Our Best Services </h1>
      {/* showing services */}
      <div className="container-homeCards">
        {servicesHome.map((sh) => (
          <ServiceHome serviceHome={sh}></ServiceHome>
        ))}
      </div>
    </div>
  );
};

export default Home;
