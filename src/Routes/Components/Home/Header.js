import React from "react";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "../../../config/particlesConfig";
import "../../css/HomeHeader.css";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="header-container">
      <Particles className="header-particles" params={particlesConfig} />
      <div className="header-background-img">
        <div className="header-title">
          <div className="header-text">{t("welcomeMessage")}</div>
          <div className="header-button">
            <NavLink to="/" activeClassName="header-active-title-btn">
              {t("exploreMessage")}
            </NavLink>

            <Particles className="header-particles" params={particlesConfig} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
