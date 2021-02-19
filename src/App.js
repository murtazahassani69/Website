import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Routes/Components/Home";
import Restaurant from "./Routes/Components/Restaurant";
import Store from "./Routes/Components/StoreOnLine";
import JallowTemplate1 from './Routes/Components/JallowTemplate1';
import CVTemplateJallow2 from './Routes/Components/JallowTemplate1';
import Error from "./Routes/Components/Error";
// Notice the keyword "exact" so react just renders the default page when nothing but the '/' is on it.

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />   
          <Route path='/restaurant' exact component={Restaurant} /> 
          <Route path='/store' exact component={Store} /> 
          <Route path='/jallow' exact component={JallowTemplate1} />
          <Route path='/jallow-cv' exact component={CVTemplateJallow2} />
          <Route path='*' component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;