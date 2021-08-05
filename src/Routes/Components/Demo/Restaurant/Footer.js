import React from 'react';
import footer_img from '../../../imgs/footer_logo.png';
import '../../../css/ResFooter.css';

function Footer() {
    return (<>
        <div className="ResFooter-div-wrapper">
            <div  className="ResFooter-div-inner">
            <div id="ResFooter-footer-box2" 
            className="ResFooter-footer-boxes">
                    <h1><span>YuKa </span> Restaurant</h1>
                    <p>Wood fired Neapolitan pizzas prepared 
                     with the purestrespect for traditions, 
                     fresh hand-made pasta
                      and over a hundred different wines 
                      from the most renowned winemakers.
                    </p>
                   
                </div>
                <div id="ResFooter-footer-box1" className="ResFooter-footer-boxes">
                    <a href="#" ><img id="ResFooter-logo" src={footer_img} alt="logo" ></img></a>
                    
                    <div className="ResFooter-social">
                        <br></br>
                        <a href="#" className="ResFooter-social-icons"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="ResFooter-social-icons"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="ResFooter-social-icons"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="ResFooter-social-icons"><i className="fab fa-youtube"></i></a>
                    </div>
                     
                </div>

                
                <div id="ResFooter-footer-box3" className="ResFooter-footer-boxes">
                    <div className="ResFooter-contact">
                        <h2>Contact info</h2>
                        <span><i className="fas fa-phone"></i>&nbsp;+306988083143</span><br></br>
                        <span><i className="fas fa-at"></i>&nbsp;info@yuka.com</span>
                                   
                        <div className="ResFooter-newsletter">
                            <form >
                            <br></br>
                                <input className="email" type="email" placeholder="Subscribe to our newsletter:"/>
                                <input type="submit" className="submit" value="Submit"/>
                            </form>
                        </div>
                    </div> 
                </div>    
            </div>
        
        </div>
        {/* //  <!-- #copyright-container start --> */}
         <div id="ResFooter-bottom-container">
                  {/* <!-- .row start --> */}
                 <div className="ResFooter-bottom-row"> 
                         <ul className="ResFooter-navbar">
                             <li><a href="index.html">Home</a></li>
                             <li><a href="about.html">About</a></li>
                             <li><a href="menu-01.html">Menu</a></li>
                             <li><a href="reservations.html">Reservations</a></li>
                             <li><a href="catering.html">Catering</a></li>
                             <li><a href="gallery.html">Gallery</a></li>
                             <li><a href="blog.html">Blog</a></li>
                             <li><a href="contact.html">Contact</a></li>
                         </ul>
                            <h5> &copy;2020 yuka.com | Designed by YuKa </h5>
                 </div>
                 {/* <!-- .row end --> */}
            
             <a href="#" className="scroll-up"><i className="fa fa-angle-double-up"></i></a>
 
         </div>
        {/* //  <!-- .copyright-container end --> */}
        </>
    );
}

export default Footer;