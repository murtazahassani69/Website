import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Routes/Components/Home";
import Restaurant from "./Routes/Components/Restaurant";
import Store from "./Routes/Components/StoreOnLine";
import TempJ1 from "./Routes/Components/TempJa1";
import Murtaza_Tamp from "./Routes/Components/Murtaza_Tamp";
import SecondMurtaza_Tamp from "./Routes/Components/SecondMurtaza_Tamp";
import Error from "./Routes/Components/Error";// Notice the keyword "exact" so react just renders the default page when nothing but the '/' is on it.
import MurtazaTampReview from './Routes/Components/Demo/CVTemplates/MurtazaTemplate/MurtazaTampReview';

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function App() {
  return (
    <Router>
    <div className="App"> 
      <Switch>
        <Route path='/' exact component={Home} />   
        <Route path='/restaurant' exact component={Restaurant} /> 
        <Route path='/store' exact component={Store} /> 
        <Route path='/templates' exact component={Templates} /> 
        <Route path='/templateMa1' exact component={TempMa1} /> 
        <Route path='/templateJ1' exact component={TempJ1} /> 
        <Route path='/templateJ2' exact component={TempJ2} /> 
        <Route path='/templateJ3' exact component={TempJ3} /> 
        <Route path='/templateB1' exact component={TempB1} /> 
        <Route path='/templateB2' exact component={TempB2} /> 
        <Route path='/templateY1' exact component={TempY1} /> 
        <Route path='/templateY2' exact component={TempY2} /> 
        <Route path='/templateY3' exact component={TempY3} /> 
        <Route path='/templateMu1' exact component={TempMu1} /> 
        <Route path='/templateMu2' exact component={TempMu2} /> 
        <Route path='*' component={Error}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;