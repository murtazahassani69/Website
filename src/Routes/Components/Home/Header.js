import React from "react";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "../../../config/particlesConfig";
import "../../css/HomeHeader.css";
import { Text } from "./containers/Language";

function Header() {
  return (
    <div className="header-container ">
      <Particles className="header-particles" params={particlesConfig} />

      <div className="header-background-img">
        <div className="header-title">
          <div className="header-text">
            <Text tid="Welcome_message" />{" "}
          </div>

          <div className="header-button">
            <NavLink to="/" activeClassName="header-active-title-btn">
              <Text tid="Explore_message" />{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
