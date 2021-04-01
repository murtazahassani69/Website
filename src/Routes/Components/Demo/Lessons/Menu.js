import React from "react";
import './css/Lesons.css';

function Menu() {
  return (
    <div> 
      <div id="logoAndTitle">
        <img src="images/amnick_logo.png" alt="Amnick Logo" width="80px" height="77px"></img>
        <h1  id="title">We can place a title here</h1>
      </div>
      <nav className="navbar">      
        <ul className="main-nav">
            <li>
                <a href="#" className="nav-links">Home</a>
            </li>
            <li>
                <a href="#" className="nav-links">Curriculum</a>
            </li>
            <li>
                <a href="#" className="nav-links">About Us</a>
            </li>                       
            <li>
                <a href="#" className="nav-links">Sign Up</a>
            </li>
        </ul>
      </nav>     
    </div>
  );
}

export default Menu;