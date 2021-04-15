import React from "react";
import './css/Lesons.css';
//import logoHeader from "./imgs/logo.jpg";

function Header() {
  return (
    <div className="bg">
      <div className="search">
        <form class="search-form">
          <input type="text" placeholder="Search"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Header;