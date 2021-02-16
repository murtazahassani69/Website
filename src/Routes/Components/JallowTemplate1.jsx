import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import JallowTemplate1 from './Demo/CVTemplates/JallowTemplate/JallowTemplate1';

// Swith Component renders the first match and ignore the rest.
//{/* Mutaza and Presefoni Part */}
function JallowTemplate() {
  return (
    <Router>     
        <JallowTemplate1 />
    </Router>
  );
}

export default JallowTemplate;