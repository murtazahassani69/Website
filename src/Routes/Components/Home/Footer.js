import React from 'react';
import footer_img from '../../imgs/logo_NoFrame.jpg';
import '../../css/HomeFooter.css';

function Footer() {
    return (
        <div class="div-footer">
            <div  class="inner_footer">
                <div id="footer-box1" class="footer-boxes">
                    <a href="#" ><img id="footer-logo" src={footer_img} alt="logo" ></img></a>

                    <div class="socials">
                        <a href="#" class="ResFooter-social-icons"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="ResFooter-social-icons"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="ResFooter-social-icons"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="ResFooter-social-icons"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div id="footer-box2" class="footer-boxes">
                    <h1><span>EKSI-</span>NOUS</h1>
                    <h4 className="footer-box2-text" >We help future bosses of business. Together, we make better.
                    </h4>
                    <div class="contact">
                        <a href="mailto:someone@example.com"><span><i class="fas fa-at"></i> Contact us</span></a>
                        <br></br>
                    </div>
                </div>
                <div id="footer-box3" class="footer-boxes">
                    <h2>Quick Links</h2>
                    <ul>
                        <a href='/about'><li>About us</li></a>
                        <a href='#services'><li>Services</li></a>
                        <a href='#portfolio'><li>Portfolio</li></a>
                        <a href='/Login'><li>Sign in</li></a>
                    </ul>
                </div>    
            </div>
            <div class="footer-bottom">
                <h5> &copy;2021 eksinous.com | Designed by YuKa </h5>
            </div>
        </div>
    );
}

export default Footer;