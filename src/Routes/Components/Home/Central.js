import React from 'react';
import storePic from '../../imgs/store.png';
import restaurantPic from '../../imgs/restaurant.png';
import '../../css/HomeCentral.css';
import {Link} from 'react-router-dom';


function Central() {
  return (
    <div>
      {/* <!-- Main page --> */}

      <div className="central-div-welcome-content">
        <h1>Welcome to the StartUP Team</h1>
        <hr className="central-hr-welcome"></hr>
        <p>For all your professional web designing and development</p>
      </div>

      {/* <!-- first section --> */}

      <div id="central-div-container">
        <div className="central-div-grid-boxes">

          <div className="central-div-grid-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAX8mMzrPY6fvqdLsC_QNLaakpUx22CnN6cA&usqp=CAU" alt="" className="central-div-img"></img>
            <h4>Amazing. Incredible</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum expedita est asperiores at nobis eligendi corporis repellendus natus distinctio!</p>
            <a href="#" className="central-div-btn">Our Innovation</a>
          </div>

          <div className="central-div-grid-box">
            <img src="https://d1t2cyxhsn73kx.cloudfront.net/image/article/teamwork.jpg" alt="" className="central-div-img"></img>
            <h4>Incredible how we work</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum expedita est asperiores at nobis eligendi corporis repellendus natus distinctio!</p>
            <a href="#" className="central-div-btn">Our Story</a>
          </div>

          <div className="central-div-grid-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDlvgZ2dp9P70KYHluP4qPHdKdeI_0nsXHg&usqp=CAU" alt="" className="central-div-img"></img>
            <h4>Incredible Vision</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum expedita est asperiores at nobis eligendi corporis repellendus natus distinctio!</p>
            <a href="#" className="central-div-btn">Our Vision</a>
          </div>

        </div>
      </div>

      {/* border */}
      <hr className="central-hr-horizonal"></hr>
      
      {/* <!-- port --> */}

      <div className="central-div-port">
        <h1 className="central-div-port-head">portfolio</h1>
        <p className="central-div-port-text"><strong>Our Team of expert can help you bring your ideas in to light!</strong></p>
      </div>

      {/* <!-- Boxes div --> */}

      <div className="central-div-boxes">

        <a href={`/store`}><div className="central-div-box">
          <img src={storePic} alt="" width="350px" height="200px" className="central-div-img"></img>
          <h3>Store Demo</h3>
          <p>View a sample demo from an online store. This page is currently static</p>
        </div></a>

        <a href={`/restaurant`}><div className="central-div-box">
          <img src={restaurantPic} alt="" width="350px" height="200px" className="central-div-img"></img>
          <h3>Marketing</h3>
          <p>View a sample demo from a restaurant. This page is currently static</p>
        </div></a>

        <div className="central-div-box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfT5VH2ZnqIk34Szx0sKBwgTJef9bAYuOog&usqp=CAU" alt="" width="350px" height="200px" className="central-div-img"></img>
          <h3>Development</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. !</p>
        </div>

        <div className="central-div-box">
          <img src="https://www.practicalparenting.com.au/media/12522/01_03_19-pitbull-landscape.jpg" alt="" width="350px" height="200px" className="central-div-img"></img>
          <h3>Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
      </div>

      <hr className="central-hr-horizonal"></hr>

      {/* web-tools */}
      <div className="central-div-web-tools">
        <h3 className="central-div-web-tools-head">We built all what you need, for quality web Design and development Services?</h3>
        <p className="central-div-web-tools-text"><strong>Here is some of the best web languages, framwork/libarary and designing we used</strong></p>
      </div>
      
      {/* designing and development tools */}
      <div className="central-div-columns-container">

        <div className="central-div-flex-columns">
        <img src="https://img.icons8.com/ios-filled/100/000000/jquery.png"
            alt="" width="100px" className="central-div-img"></img>
          <p><strong>Jquery</strong></p>
        </div>

        <div className="central-div-flex-columns">
          <img src="https://img.icons8.com/nolan/100/react-native.png"
            alt="" className="central-div-img"></img>
          <p><strong>Reactjs</strong></p>
        </div>

        <div className="central-div-flex-columns">
          <img src="https://img.icons8.com/color/100/000000/nodejs.png"
            alt="" className="central-div-img"></img>
          <p><strong>Nodejs</strong></p>
        </div>

        <div className="central-div-flex-columns">
          <img src="https://img.icons8.com/color/100/000000/javascript-logo-1.png"
            alt="" className="central-div-img"></img>
          <p><strong>Javascript</strong></p>
        </div>

        <div className="central-div-flex-columns">
          <img src="https://img.icons8.com/nolan/100/html-5.png"
            alt="" className="central-div-img"></img>
          <p><strong>HTML5</strong></p>
        </div>

        <div className="central-div-flex-columns">
          <img src="https://img.icons8.com/color/100/000000/css3.png"
            alt="" className="central-div-img"></img>
          <p><strong>CSS3</strong></p>
        </div>

        <div className="central-div-flex-columns">
        <img src="https://img.icons8.com/color/100/000000/mongodb.png"
          alt="" className="central-div-img"></img> 
          <p><strong>MongoDB</strong></p>
        </div>

        <div className="central-div-flex-columns">
        <img src="https://img.icons8.com/nolan/100/mysql.png"
          alt="" className="central-div-img"></img> 
          <p><strong>mySql</strong></p>
        </div>

        <div className="central-div-flex-columns">
        <img src="https://img.icons8.com/color/100/000000/adobe-photoshop.png"
          alt="" className="central-div-img"></img> 
          <p><strong>Photoshop</strong></p>
        </div>

        <div className="central-div-flex-columns">
        <img src="https://img.icons8.com/windows/100/4a90e2/figma.png"
          alt="" className="central-div-img"></img> 
          <p><strong>Figma</strong></p>
        </div>

      </div>
    </div>
  );
}

export default Central;
