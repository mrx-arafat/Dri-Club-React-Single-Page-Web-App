import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import { useEffect, useState } from "react";
import ServiceHome from "./components/ServiceHome/ServiceHome";

function App() {
  const [servicesHome, setServicesHome] = useState([]);
  useEffect(() => {
    fetch("./servicesHome.json")
      .then((res) => res.json())
      .then((data) => setServicesHome(data));
  }, []);

  return (
    <div className="App">
      {/* react router */}
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
        </Switch>
      </BrowserRouter>

      {/* showing services */}
      {servicesHome.map((sh) => (
        <ServiceHome serviceHome={sh}></ServiceHome>
      ))}
    </div>
  );
}

export default App;
