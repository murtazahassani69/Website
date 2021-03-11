import React from "react";
import './css/Lessons.css';

function Menu() {
  return (
    <div> 
      <div id="logoAndTitle">
        <img src="images/amnick_logo.png" alt="Amnick Logo" width="80px" height="77px">
        <h1  id="title">We can place a title here</h1>
      </div>
      <nav class="navbar">      
        <ul class="main-nav">
            <li>
                <a href="#" class="nav-links">Home</a>
            </li>
            <li>
                <a href="#" class="nav-links">Curriculum</a>
            </li>
            <li>
                <a href="#" class="nav-links">About Us</a>
            </li>                       
            <li>
                <a href="#" class="nav-links">Sign Up</a>
            </li>
        </ul>
      </nav>
               
    </div>
  );
}

export default Menu;