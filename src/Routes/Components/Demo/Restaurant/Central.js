import React from "react";
import "../../../css/ResCentral.css";
import menu1 from "./imgs/menu1.jpg";
import menu from "./imgs/menu.jpg";
import menu2 from "./imgs/menu2.jpg";
import spices_left from "./imgs/spices_left.png";
import spices_right from "./imgs/spices-right.png";
import pic_left from "./imgs/pic_left.jpg";


/**
 * ! Hello Guys! all the changes that i have done are here in this file.
 * ! Important: all the files in the header belongs to maria, and i did not made any changes
 * ! i just coped them from github and put them in the header js and header.css/
 * !  Please before accepting the incoming changes see what are the changes
 * ? and every single div or tag has a class name it will not make any conflicts
 * ! all the image files come form the imgs in component/restaurant folder.
 * ! and all the css files come form the css files in src/css.
 * ? inside the menu.js i did nothing, just removed the files that i was thinking to make for restaurant
 * ? menu and i did the restaurant here inside this file.
 */

// second menu: story of restaurant component
function SecondMenu() {
  return (
    <div className="second_menu_home_section">
      <div className="second_menu_home_section_container">
        <div className="second_menu_section_left">
          <img src={spices_left} alt="Amnick Smart Cites - Restaurant" />
        </div>

        <div>
          <div className="res_second_menu_center">
            <h3 className="second_menu_h3_title"> Our story </h3>
            <span class="dot"></span>

            <hr className="second_menu_hr" />
            <span className="dot"></span>
            <p className="second_menu_p">
              Welcome. This is Amnick smart cities. Elegant &amp; sophisticated
              restaurant template. Amnick smart cities offers different home
              page layouts with smart and unique design, showcasing beautifully
              designed elements every restaurant website should have. Smooth
              animations, fast loading and engaging user experience are just
              some of the features this template offers.
              <br />
              So, give it a try and dive into a world of royal restaurant
              websites.
            </p>
            <p className="second_menu_p">
              Welcome. This is Amnick smart cities. Elegant &amp; sophisticated
              restaurant template. Amnick smart cities offers different home
              page layouts with smart and unique design, showcasing beautifully
              designed elements every restaurant website should have. Smooth
              animations, fast loading and engaging user experience are just
              some of the features this template offers.
              <br />
              So, give it a try and dive into a world of royal restaurant
              websites.
            </p>
          </div>
        </div>
        <div className="second_menu_section_right">
          <img
            src={spices_right}
            alt="Royal Plate - Restaurant &amp; Catering HTML Template"
          />
        </div>
      </div>
    </div>
  );
}

// Restaurant book a table component and form
function RestaurantBookTable() {
  return (
    <div id="RestaurantBookTable" className="restaurant_book_table_section">
      <div className="restaurant_book_table_section_container">
        <div className="restaurant_book_table_left">
          <img src={pic_left} alt="Amnick Smart Cites - Restaurant" />
        </div>
        <div>
          <div className="restaurant_book_table_center">
            <h3 className="restaurant_book_table_h3"> Book a table </h3>
            <div className="form_">
              <p className="restaurant_book_table_p"> Name</p>
              <input
                type="text"
                placeholder="your name"
                className="res_input"
                name="last_name"
              />
              <p className="restaurant_book_table_p">Email</p>
              <input
                type="email"
                placeholder="your email"
                className="res_input"
                name="email"
              />
              <p className="restaurant_book_table_p">Choose a date </p>
              <input
                type="date"
                placeholder="your email"
                className="res_input"
                name="email"
              />
              <div className="restaurant_book_table_submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="restaurant_book_table_right">
          <img
            src={pic_left}
            alt="Royal Plate - Restaurant &amp; Catering HTML Template"
          />
        </div>
      </div>
    </div>
  );
}

// central component
function Central() {
  return (
    <div class="restaurant_home_center">
      <h1 className="res_title_h1">WELCOME</h1>
      <p className="res_paragraph_p">
        Dear guests, you are welcomed at our restaurant. <br /> We greatly
        appreciate your choice of dining with us <br /> and we promise to serve you
        with our excellence. <br /> Welcome you and have a fine dining
        experience.
      </p>
      <div className="res_sup_icon">
        <sup>&darr;</sup>
      </div>

      <a href="#RestaurantBookTable" className="res_button">
        <span className="res_span">Book Now</span>
      </a>
    </div>
  );
}
// Restaurant Menu component

function Menu() {
  return (
    <div>
      <SecondMenu />
      <div className="res_foods_Menu">
        <h1 className="res_foods_h1_title">OUR MENUS </h1>
        <hr className="res_foods_hr" />
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="img_5terre.jpg">
              <img src={menu} alt="Cinque Terre" width="600" height="400" />
            </a>
            <div className="desc">
            <h3 className="res_foods_Menu_h3_title">Title and article</h3>
              <p className="res_foods_Menu_p">
                Add a description of the image here
              </p>
              <a href="#" className="res_food_a_link">
                Links
              </a>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img src={menu2} alt="Northern Lights" width="600" height="400" />
            </a>
            <div className="desc">
            <h3 className="res_foods_Menu_h3_title">Title and article</h3>
              <p className="res_foods_Menu_p">
                Add a description of the image here
              </p>
              <a href="#" className="res_food_a_link">
                Links
              </a>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img src={menu2} alt="Northern Lights" width="600" height="400" />
            </a>
            <div className="desc">
            <h3 className="res_foods_Menu_h3_title">Title and article</h3>
              <p className="res_foods_Menu_p">
                Add a description of the image here
              </p>
              <a href="#" className="res_food_a_link">
                Links
              </a>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img src={menu1} alt="Restaurant" width="600" height="400" />
            </a>
            <div className="desc">
            <h3 className="res_foods_Menu_h3_title">Title and article</h3>
              <p className="res_foods_Menu_p">
                Add a description of the image here
              </p>
              <a href="#" className="res_food_a_link">
                Links
              </a>
            </div>
          </div>
        </div>
      </div>
      <Central />
      <RestaurantBookTable />
    </div>
  );
}
export default Menu;

