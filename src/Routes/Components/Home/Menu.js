import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../css/HomeMenu.css";
import logo_img from "../../imgs/footer_logo.png";
import logo_6 from "../../imgs/new.png";
import logos_6 from "../../imgs/logo_6.png";
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
      name: "Services",
      link: "/ServicesId",
    },
    {
      name: "Portfolio",
      link: "/portfolio_more",
    },
    {
      name: "About Us",
      link: "/store",
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
        <a href="/">
          <img
            src={logo_img}
            alt="eskinous logo"
            className="menu__navbar-logo"
          />
          <img
            src={logo_6}
            alt="eskinous logo"
            className="menu__navbar_logo1"
          />
        </a>
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
