import React from "react";
import "../../../css/ResHeader.css";

function Header() {
  return (
    <div id="header_id" className="home_header">
      <ul>
        <li className="categories">
          <a href="#">Amnick Logo</a>
          <ul>
          <li>
          <a href="#">salad</a>
        </li>
        <li>
        <a href="#">salad</a>
      </li>
          </ul>

        </li>
        <li className="categories">
          <a href="#">Menu</a>
          <ul>
            <li>
              <a href="#">salad</a>
            </li>

            <li>
              <a href="#">steak.</a>
            </li>
            <li className="da">
              <a href="#">More Options.</a>
              <ul>
                <li>
                  <a href="#">fish.</a>
                </li>
                <li>
                  <a href="#">Bedfordshire clanger</a>
                  <a href="#">Bangers and mash</a>
                  <a href="#">Cobbler</a>
                  <a href="#">Bubble and squeak</a>
                  <a href="#">Cauliflower cheese</a>
                  <a href="#">Faggots</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">SUBSCRIBE</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
