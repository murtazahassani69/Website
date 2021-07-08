import React from "react";
import "../../../css/TemplateDisplayHeader.css";


function Header() {
  return (
      <div className="cv_tem_murtaza_header_top">
        <a className="cv_tem_murtaza_header_active" href="/">
          Home
        </a>
        <a className="cv_tem_murtaza_header_a_" href="#news">News</a>
        <a className="cv_tem_murtaza_header_a_" href="#contact">Contact</a>
        <a className="cv_tem_murtaza_header_a_" href="#about">About</a>
      </div>
  );
}

export default Header;
