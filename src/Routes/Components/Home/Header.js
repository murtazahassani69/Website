import React from 'react';
import { NavLink } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../../../config/particlesConfig';
import '../../css/HomeHeader.css';

function Header() {
  return (
    <div className='header-container '>
      <Particles className='header-particles' params={particlesConfig} />

      <div className='header-background-img'>
        <div className='header-title'>
          <div className='header-text'>
            Let's get started together in the world of buisness.
          </div>

          <div className='header-button'>
            <NavLink to='/' activeClassName='header-active-title-btn'>
              Let's go
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
