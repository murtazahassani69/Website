import React,{useState,useEffect} from "react";
import "../../../css/ResMenu.css";
import logo_img from './imgs/rest_logo.png';
import { FaAlignRight } from 'react-icons/fa';

function Menu() {
    const[navbar,setNavbar]=useState(false);
    const [toggle, setToggle] = useState(false);

    const changeBackground=()=>{
        if(window.scrollY >= 100){
            setNavbar(true)
        }else setNavbar(false);
    }

    window.addEventListener('scroll',changeBackground);
    return (
        <>
            <nav className= {navbar?'rest_menu active':"rest_menu"}>
                <img src={logo_img} className="rest_logo" alt="logo"/>
                <ul className="rest_menu-list" >
                    <li><a href="#" className="rest_menu-link">Home</a></li>
                    <li ><a href="#res_link_about" className="rest_menu-link">About</a></li>
                    <li><a href="#res_link_gallery" className="rest_menu-link">Gallery</a></li>
                    <li><a href="#" className="rest_menu-link">Menu</a>
                        <ul className="rest_menu-dropdown">
                            <li><a href="#">Menu-1</a></li>
                            <li><a href="#">Menu-2</a></li>
                            <li><a href="#">Menu-3</a></li>
                        </ul>
                    </li>
                    <li><a href="#RestaurantBookTable" className="rest_menu-link">Contact</a></li>
                </ul>
            

                <button className="rest_button-toggle"onClick={() => setToggle(!toggle)}>
                <FaAlignRight className="rest_span-toggle"  />
                </button>
            </nav>
            <div className= "rest_menu-toggle" onClick={() => setToggle(!toggle)}>
                <ul className={toggle ?'rest_list-toggle-active':'rest_list-toggle'}>
                    <li ><a href="#" >About</a></li>
                    <li><a href="#" >Gallery</a></li>
                    <li><a href="#" >Menu</a>
                        <ul className="rest_toggle-dropdown">
                            <li><a href="#">Sub-1</a></li>
                            <li><a href="#">Sub-2</a></li>
                            <li><a href="#">Sub-3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contact</a></li>
                </ul>
             </div>
      </>
      );
  }
  
  export default Menu;