import React from "react";
import "../../../css/ResMenu.css";
import menu from "../Restaurant/imgs/menu.jpg";

function Menu() {
  return (
    <div className="Menu">
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={menu} alt="Cinque Terre" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src={menu} alt="Northern Lights" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src={menu} alt="Northern Lights" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src={menu} alt="Northern Lights" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src={menu} alt="Northern Lights" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src={menu} alt="Northern Lights" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src={menu} alt="Northern Lights" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img src={menu} alt="Mountains" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
