import React from 'react';
import Menu from './Demo/Lessons/Menu'
import Header from './Demo/Lessons/Header'
import Central from './Demo/Lessons/Central'
import Footer from './Demo/Lessons/Footer'


function Lessons() {
  return (
        <div >
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
    <div class="bg">
         <div class="search">
        <form class="search-form">
            <input type="text" placeholder="Search">
            <input type="submit" value="Submit">
        </form>
    </div>
</div>
<div id="intro"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse deleniti saepe ratione labore eum laborum magni? Sequi, ex cumque culpa libero nobis maiores necessitatibus porro dolores reprehenderit, dicta iste.
    
</p></div>
<div class="flex-container">
<div class="box">
    <img src="images/question-mark1.png" alt="question mark" width="200px" class="image-box">
    <h2>Programming concepts</h2>
    </div>
  <div class="box"><img src="images/logo-html5.png" alt="css" width="200px" class="image-box">
    <h2>HTML</h2></div>
  <div class="box"><img src="images/logo-css.png" alt="css" width="200px" class="image-box">
    <h2>CSS</h2>
</div>
</div>
        </div>
  );
}

export default Lessons;