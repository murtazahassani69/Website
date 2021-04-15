import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Routes/Components/Home";
import Restaurant from "./Routes/Components/Restaurant";
import Store from "./Routes/Components/StoreOnLine";
import Templates from "./Routes/Components/Templates";
import TempJ1 from "./Routes/Components/TempJa1";
import TempJ2 from "./Routes/Components/TempJa2";
import TempJ3 from "./Routes/Components/TempJa3";
import TempB1 from "./Routes/Components/TempBo1";
import TempB2 from "./Routes/Components/TempBo2";
import TempMa1 from "./Routes/Components/TempMa1";
import TempMa2 from "./Routes/Components/TempMa2";
import TempMu1 from "./Routes/Components/TempMu1";
import TempMu2 from "./Routes/Components/TempMu2";
import TempY1 from "./Routes/Components/TempYu1";
import TempY2 from "./Routes/Components/TempYu2";
import TempY3 from "./Routes/Components/TempYu3An";
import Error from "./Routes/Components/Error";// Notice the keyword "exact" so react just renders the default page when nothing but the '/' is on it.

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
          <Route path='/templateMa2' exact component={TempMa2} /> 
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