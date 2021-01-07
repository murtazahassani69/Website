import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeCnenter from "./HomeHeaderCnenter/HomeCnenter";
import particlesConfig from "./config/particlesConfig";
import Particles from "react-particles-js";

//   {/* Mutaza and Presefoni Part */}
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
      </div>
    </Router>
  );
}

export default App;
