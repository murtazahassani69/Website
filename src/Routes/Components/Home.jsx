import React, { useState, useEffect } from 'react';
import particlesConfig from "../../config/particlesConfig";
import Particles from "react-particles-js";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Home/Menu";
import Header from "./Home/Header";
import Central from "./Home/Central";
import Footer from "./Home/Footer";
const axios = require('axios').default;


// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function Home() {
  const [countries, setCountries] = useState([]);
  
  const fetchCountries = async() => {
    try{
      setCountries(await (await axios.get('http://localhost:8080/countries')).data);
    } catch(error){
      console.log(`${error}`);
    }
  }

  useEffect(() => {
    console.log("REACHED");
    fetchCountries();
    console.log("END");
    }, []);

    console.log(countries);

  return (
    <Router>  
        <div style={{ position: "absolute" }}>
          <Particles
            className="Particless"
            paddingTop="153px"
            width="100vw"
            justifyContent="center"
            params={particlesConfig}
          />
        </div>   
        <Menu />
        <Header />
        <Central />
        <Footer />
    </Router>
  );
}

export default Home;