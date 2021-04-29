import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Home/Menu';
import Header from './Home/Header';
import Central from './Home/Central';
import Footer from './Home/Footer';

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function Home() {
  return (
    <Router>
      <Menu />
      <Header />
      <Central />
      <Footer />
    </Router>
  );
}

export default Home;
