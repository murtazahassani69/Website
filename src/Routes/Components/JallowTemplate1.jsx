import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import JallowTemplate1 from './Demo/CVTemplates/JallowTemplate/JallowTemplate1';
import CVTemplateJallow2 from './Demo/CVTemplates/JallowTemplate/CVTemplateJallow2';

// Swith Component renders the first match and ignore the rest.
//{/* Mutaza and Presefoni Part */}
function JallowTemplate() {
  return (
    <Router>     
      <Route path='/jallow' exact component={JallowTemplate1} />
      <Route path='/jallow-cv' exact component={CVTemplateJallow2} />
        {/* <JallowTemplate1 />
        <CVTemplateJallow2 /> */}
    </Router>
  );
}

export default JallowTemplate;