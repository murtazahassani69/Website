import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import StoreMenu from './Demo/StoreOnline/StoreMenu'
import StoreHeader from './Demo/StoreOnline/StoreHeader'
import StoreCentral from './Demo/StoreOnline/StoreCentral'
import StoreFooter from './Demo/StoreOnline/StoreFooter'

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function StoreOnLine() {
  return (
     //style={{margin: '0px'}}
    <Router>     
        <StoreMenu />
        <StoreHeader />
        <StoreCentral />
        <StoreFooter />
    </Router>
  );
}

export default StoreOnLine;