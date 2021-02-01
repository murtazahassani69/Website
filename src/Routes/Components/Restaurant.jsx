import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Central from "./Demo/Restaurant/Central";
import Footer from "./Demo/Restaurant/Footer";
import Menu from "./Demo/Restaurant/Menu";
import Header from "./Demo/Restaurant/Header";

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function Restaurant() {
  return (
    <Router>     
      <Header />
      <Central />
      <Menu />
      <Footer />
    </Router>
  );
}

export default Restaurant;