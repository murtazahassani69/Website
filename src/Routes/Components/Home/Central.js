import React from 'react';
import storePic from '../../imgs/store.png';
import restaurantPic from '../../imgs/restaurant.png';
import Templates_cv from '../../imgs/templates_cv.png';
import Templates from '../../imgs/templates.png';
import '../../css/HomeCentral.css';
import { Link } from 'react-router-dom';
import mariaDB from '../../imgs/mariaDB.png';
import FirstSectionCards from './Central/FirstSectionCards/FirstSectionCards';

function Central() {
  const tools = [
    {
      tool: 'Jquery',
      link: 'https://img.icons8.com/ios-filled/100/000000/jquery.png',
    },
    {
      tool: 'Reactjs',
      link: 'https://img.icons8.com/nolan/100/react-native.png',
    },
    {
      tool: 'Nodejs',
      link: 'https://img.icons8.com/color/100/000000/nodejs.png',
    },
    {
      tool: 'Javascript',
      link: 'https://img.icons8.com/color/100/000000/javascript-logo-1.png',
    },
    {
      tool: 'HTML5',
      link: 'https://img.icons8.com/nolan/100/html-5.png',
    },
    {
      tool: 'CSS3',
      link: 'https://img.icons8.com/color/100/000000/css3.png',
    },
    {
      tool: 'MongoDB',
      link: 'https://img.icons8.com/color/100/000000/mongodb.png',
    },
    {
      tool: 'mySql',
      link: 'https://img.icons8.com/nolan/100/mysql.png',
    },
    // {
    //   tool: 'Photoshop',
    //   link: 'https://img.icons8.com/color/100/000000/adobe-photoshop.png',
    // },
    {
      tool: 'MariaDB',
      link: `${mariaDB}`,
    },
  ];

  const displayTools = () => {
    return tools.map((el, i) => {
      return (
        <div class='central-div-flex-columns' key={i}>
          <img src={el.link} alt={el.tool} class='central-div-img' />
          <p>
            <strong>{el.tool}</strong>
          </p>
        </div>
      );
    });
  };
  return (
    <div>
      {/* <!-- Main page --> */}

      <div class='central-div-welcome-content'>
        <h1>Welcome to the StartUP Team</h1>
        <hr class='central-hr-welcome'></hr>
        <p>For all your professional web designing and development</p>
      </div>

      {/* <!-- first section --> */}

      <FirstSectionCards />

      {/* border */}
      <hr class='central-hr-horizonal'></hr>

      {/* <!-- port --> */}

      <div class='central-div-port'>
        <h1 class='central-div-port-head'>portfolio</h1>
        <p class='central-div-port-text'>
          <strong>
            Our Team of expert can help you bring your ideas in to light!
          </strong>
        </p>
      </div>

      {/* <!-- Boxes div --> */}
      <div class='central-div-boxes'>
        <a href={`/store`}>
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

        <a href={`/restaurant`}>
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
        </a>

        <a href={`/templates`}>
          <div class='central-div-box'>
            <img
              src={Templates_cv}
              alt=''
              width='350px'
              height='200px'
              class='central-div-img'
            ></img>
            {/* <img src={Templates}alt="" width="350px" height="200px" class="central-div-img"></img> */}
            <h3>Resume Templates</h3>
            <p>View the demo of CV templates. This page is currently static</p>
          </div>
        </a>
        {/* <div class="central-div-box">
          <img src="https://www.practicalparenting.com.au/media/12522/01_03_19-pitbull-landscape.jpg" alt="" width="350px" height="200px" class="central-div-img"></img>
          <h3>Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div> */}
      </div>

      <hr class='central-hr-horizonal'></hr>

      {/* web-tools */}
      <div className='central-div-web-tools'>
        <h3 class='central-div-web-tools-head'>
          We built all what you need, for quality web Design and development
          Services?
        </h3>
        <p class='central-div-web-tools-text'>
          <strong>
            Here is some of the best web languages, framwork/libarary and
            designing we used
          </strong>
        </p>
      </div>

      {/* designing and development tools */}
      <div class='central-div-columns-container'>{displayTools()}</div>
    </div>
  );
}

export default Central;
