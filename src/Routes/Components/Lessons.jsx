import React from 'react';
import Menu from './Demo/Lessons/Menu'
import Header from './Demo/Lessons/Header'
import Central from './Demo/Lessons/Central'
import Footer from './Demo/Lessons/Footer'


function Lessons() {
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
 
 <div class="bg">
      <div class="search">
     <form class="search-form" method="get" action="#">
         <input type="text" placeholder="Search" required>
         <input type="submit" value="Submit">
     </form>
 </div>
</div>
<div id="intro"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse deleniti saepe ratione labore eum laborum magni? Sequi, ex cumque culpa libero nobis maiores necessitatibus porro dolores reprehenderit, dicta iste.
 
</p></div>
<div class="flex-container">
<div class="box">
 <a href="#"><img src="images/question-mark1.png" alt="question mark" width="200px" class="image-box">
     <h2>Programming concepts</h2></a>
 </div>

<div class="box">
   <a href="#"><img src="images/logo-html5.png" alt="css" width="200px" class="image-box">
     <h2>HTML</h2></a>
 </div>

 <div class="box">
     <a href="#"><img src="images/logo-css.png" alt="css" width="200px" class="image-box">
         <h2>CSS</h2></a>
 </div>

 <div class="box">
     <a href="#"><img src="images/javascript-icon.png" alt="javascript" width="200px" class="image-box">
         <h2>JavaScript</h2></a>
 </div>
 
</div>
<p id="question">what is code?</p>
<div><img src="images/arrow-down.png" alt="arrow-down" id="arrow-down"></div>
<div ><img src="images/code-man.png" alt="code-man" id="code-man"></div>
<footer>
  
 <div><h3>Amnick &copy 2021<br/>Images by <a href="https://pixabay.com" target="_blank">Pixabay.com</a></h3></div>
 <div class="social-media">
     <a href="#" class="fa fa-facebook"></a>
     <a href="#" class="fa fa-twitter"></a>
    
     <a href="#" class="fa fa-linkedin"></a>
     
     <a href="#" class="fa fa-instagram"></a>


</div>
<div class="clear"></div>
</footer>
</div>
  );
}

export default Lessons;