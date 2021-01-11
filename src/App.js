
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeCnenter from "./HomeHeader/HomeCnenter";
import particlesConfig from "./config/particlesConfig";
import Particles from "react-particles-js";

//   {/* Mutaza and Presefoni Part */}
import React from 'react';
import './App.css';
import Menu from './Routes/Components/Menu';
import Header from './Routes/Components/Header';
import Central from './Routes/Components/Central';
import Footer from './Routes/Components/Footer';

import Error from './Error';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Notice the keyword "exact" so react just renders the default page when nothing but the '/' is on it.
// Swith Component renders the first match and ignore the rest.
function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ position: "absolute" }}>
          <Particles className="Particless"  height="100vh" marginTop="143px" width="100vw" justifyContent="center" params={particlesConfig} />
        </div>
        <header className="App-header">
          <Route exact path="/" component={HomeCnenter} />
        </header>
        <Menu />
        {/* <Header /> */}
        <Central />
        <Footer />
      </div>
    </Router>
  );
}

// <PrivateRoute path='/protected' component={Protected}/>

export default App;
