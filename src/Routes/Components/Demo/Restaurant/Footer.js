import React from 'react';
import footer_img from '../../../imgs/footer_logo.png';
import '../../../css/ResFooter.css';

function Footer() {
    return (<>
        <div class="ResFooter-div-wrapper">
            <div  class="ResFooter-div-inner">
            <div id="ResFooter-footer-box2" 
            class="ResFooter-footer-boxes">
                    <h1><span>YuKa </span> Restaurant</h1>
                    <p>Wood fired Neapolitan pizzas prepared 
                     with the purestrespect for traditions, 
                     fresh hand-made pasta
                      and over a hundred different wines 
                      from the most renowned winemakers.
                    </p>
                   
                </div>
                <div id="ResFooter-footer-box1" class="ResFooter-footer-boxes">
                    <a href="#" ><img id="ResFooter-logo" src={footer_img} alt="logo" ></img></a>
                    
                    <div class="ResFooter-social">
                        <br></br>
                        <a href="#" class="ResFooter-social-icons"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="ResFooter-social-icons"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="ResFooter-social-icons"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="ResFooter-social-icons"><i class="fab fa-youtube"></i></a>
                    </div>
                     
                </div>

                
                <div id="ResFooter-footer-box3" class="ResFooter-footer-boxes">
                    <div class="ResFooter-contact">
                        <h2>Contact info</h2>
                        <span><i class="fas fa-phone"></i>&nbsp;+306988083143</span><br></br>
                        <span><i class="fas fa-at"></i>&nbsp;info@yuka.com</span>
                                   
                        <div class="ResFooter-newsletter">
                            <form >
                            <br></br>
                                <input class="email" type="email" placeholder="Subscribe to our newsletter:"/>
                                <input type="submit" class="submit" value="Submit"/>
                            </form>
                        </div>
                    </div> 
                </div>    
            </div>
        
        </div>
        {/* //  <!-- #copyright-container start --> */}
         <div id="ResFooter-bottom-container">
                  {/* <!-- .row start --> */}
                 <div class="ResFooter-bottom-row"> 
                         <ul class="ResFooter-navbar">
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
            
             <a href="#" class="scroll-up"><i class="fa fa-angle-double-up"></i></a>
 
         </div>
        {/* //  <!-- .copyright-container end --> */}
        </>
    );
}

export default Footer;