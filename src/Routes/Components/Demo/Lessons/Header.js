import React from "react";
import './css/Lesons.css';
//import logoHeader from "./imgs/logo.jpg";

function Header() {
  return (
    <div class="bg">
         <div class="search">
        <form class="search-form">
            <input type="text" placeholder="Search">
            <input type="submit" value="Submit">
        </form>
    </div>
    </div>
    
    
  );
}

export default Header;