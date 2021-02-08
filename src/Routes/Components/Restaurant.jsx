import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Central from "./Demo/Restaurant/Central";
import Footer from "./Demo/Restaurant/Footer";
import Menu from "./Demo/Restaurant/Menu";
import Header from "./Demo/Restaurant/Header";

function Restaurant() {
  return (
    <Router>
      <Header />
      <Menu /> 
      <Central />
      <Footer />
    </Router>

  );
}

export default Restaurant;
