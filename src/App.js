import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
