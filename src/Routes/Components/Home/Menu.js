import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../css/HomeMenu.css";
import logo_img from "../../imgs/footer_logo.png";
import greek_logo from "../../imgs/greek_logo.jpg";
import en_flag from "../../imgs/en_flag.png";
import { LanguageContext } from "./containers/Language";

import { languageOptions } from "./languages";

function Menu() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  console.log(toggle);
  const navBarOpts = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/store",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Our Work",
      link: "/restaurant",
    },
  ];

  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);
  const mapNavOpts = navBarOpts.map((el) => (
    <div key={el.name} onClick={() => setToggle(false)}>
      <NavLink to={el.link} className="menu__navbar-active">
        {el.name}
      </NavLink>
    </div>
  ));

  return (
    <>
      <div className="menu_navbar-container">
        <img src={logo_img} alt="eskinous logo" className="menu__navbar-logo" />
        <div className="menu__navbar-opts-container">{mapNavOpts}</div>

        <div className="dropdown_flag">
          <select
            className="dropdown-content_flag"
            onChange={handleLanguageChange}
            value={userLanguage}
          >
            {Object.entries(languageOptions).map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <FontAwesomeIcon
          icon={toggle ? faTimes : faBars}
          className="menu__navbar-burger-menu"
          onClick={handleClick}
        />
      </div>

      <div
        className={
          toggle
            ? "menu-dropdown-container"
            : "menu-dropdown-container-inactive"
        }
      >
        <div className="menu-dropdown-opts-cont">{mapNavOpts}</div>
      </div>
    </>
  );
}
export default Menu;
