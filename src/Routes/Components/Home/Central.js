import React from "react";
import storePic from "../../imgs/store.png";
import restaurantPic from "../../imgs/restaurant.png";
import Templates_cv from "../../imgs/templates_cv.png";
import Templates from "../../imgs/templates.png";
import "../../css/HomeCentral.css";
import { Link } from "react-router-dom";
import FirstSectionCards from "./Central/FirstSectionCards/FirstSectionCards";
import ToolsWeUse from "./Central/ToolsWeUse/ToolsWeUse";
import Portfolio from './Central/Portfolio/Portfolio';


function Central() {
  return (
    <div  id="portfolio_more" className="central_home-container">
      {/* <!-- Main page --> */}

      <div  class="central-div-welcome-content">
      <div class='central-div-welcome-content'>
        <h1 id='services'>Welcome to the StartUP Team</h1>
        <hr className='central-hr-welcome'></hr>
        <p>For all your professional web designing and development</p>
      </div>

      {/* <!-- first section --> */}
      <FirstSectionCards />

      {/* border */}

      <div class="central-div-port">
      <hr id="portfolio" class='central-hr-horizonal'></hr>
      {/* <!-- portfolio --> */}
      <div id='portfolio_more' className='central-div-port'>
        <h1 className='central-div-port-head'>portfolio</h1>
        <p className='central-div-port-text'>
          <strong>
            Our Team of experts can help you bring your ideas in to light!
          </strong>
        </p>
        <Portfolio />
      </div>
      </div>

      {/* <!-- Boxes div --> */}
      {/* <div class='central-div-boxes'> */}
      <div class="central-boxes-container">
        {/*<a to={`/store`}>
          <div class='central-div-box'>
            <img
              src={storePic}
              alt=''
              width='350px'
              height='200px'
              class='central-div-img'
            ></img>
            <h3>Store Demo</h3>
            <p>
              View a sample demo from an online store. This page is currently
              static
            </p>
          </div>
        </a>

        <a to={`/restaurant`}>
          <div class='central-div-box'>
            <img
              src={restaurantPic}
              alt=''
              width='350px'
              height='200px'
              class='central-div-img'
            ></img>
            <h3>Marketing</h3>
            <p>
              View a sample demo from a restaurant. This page is currently
              static
            </p>
          </div>
        </a> */}

        <div class="central-div-box">
          <a href="/livecvdisplay">
            <img
              src={Templates_cv}
              alt=""
              width="350px"
              height="200px"
              class="central-div-img"
            />
            <h3>Live Templates</h3>
            <p>
              View a sample demo from a restaurant. This page is currently
              static
            </p>
          </a>
        </div>

        <div class="central-div-box">
          <a href="/templates">
            <img
              src={Templates_cv}
              alt=""
              width="350px"
              height="200px"
              class="central-div-img"
            />
            {/* <img src={Templates}alt="" width="350px" height="200px" class="central-div-img"></img> */}
            <h3>Resume Templates</h3>
            <p>View the demo of CV templates. This page is currently static</p>
          </a>
        </div>
        {/* <div class="central-div-box">
          <img src="https://www.practicalparenting.com.au/media/12522/01_03_19-pitbull-landscape.jpg" alt="" width="350px" height="200px" class="central-div-img"></img>
          <h3>Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div> */}
      </div>
      {/* </div> */}

      <hr class="central-hr-horizonal"></hr>

      <Portfolio />

      <hr class='central-hr-horizonal'></hr>

      {/* web-tools */}
      <div id="learnAboutUs" className="central-div-web-tools">
        <h3 class="central-div-web-tools-head">
          We built all what you need, for quality web Design and development
          Services?
        </h3>
        <p class="central-div-web-tools-text">
          <strong>
            Here are some of the best web languages, framework/library and
            designing we used
          </strong>
        </p>
      </div>
      {/* designing and development tools */}
      <ToolsWeUse />
    </div>
    </div>
  );
}

export default Central;
