import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import particlesConfig from "./config/particlesConfig";
import Particles from "react-particles-js";
import Menu from "./Routes/Components/Menu";
import Header from "./Routes/Components/Header";
import Central from "./Routes/Components/Central";
import Footer from "./Routes/Components/Footer";
import Error from "./Error";

// Notice the keyword "exact" so react just renders the default page when nothing but the '/' is on it.
// Swith Component renders the first match and ignore the rest.

//   {/* Mutaza and Presefoni Part */}
function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
