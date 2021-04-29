import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../css/HomeMenu.css';
import logo_img from '../../imgs/footer_logo.png';

function Menu() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  console.log(toggle);
  const navBarOpts = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About us',
      link: '/',
    },
    {
      name: 'Services',
      link: '/',
    },
    {
      name: 'Our Work',
      link: '/restaurant',
    },
  ];

  const mapNavOpts = navBarOpts.map((el) => (
    <div key={el.name} onClick={() => setToggle(false)}>
      <NavLink to={el.link} className='menu__navbar-active'>
        {el.name}
      </NavLink>
    </div>
  ));

  return (
    <>
      <div className='menu_navbar-container'>
        <img src={logo_img} alt='eskinous logo' className='menu__navbar-logo' />
        <div className='menu__navbar-opts-container'>{mapNavOpts}</div>
        <FontAwesomeIcon
          icon={toggle ? faTimes : faBars}
          className='menu__navbar-burger-menu'
          onClick={handleClick}
        />
      </div>

      <div
        className={
          toggle
            ? 'menu-dropdown-container'
            : 'menu-dropdown-container-inactive'
        }
      >
        <div className='menu-dropdown-opts-cont'>{mapNavOpts}</div>
      </div>
    </>
  );
}
export default Menu;
