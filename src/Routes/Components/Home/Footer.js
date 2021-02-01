import React from 'react';
import footer_img from '../../imgs/footer_logo.png';
import facebook from '../../imgs/facebook.png';
import instagram from '../../imgs/instagram.jpg';
import twitter from '../../imgs/twitter.jpg';
import youtube from '../../imgs/youtube.jpg' ;
import phone from '../../imgs/phone.jpg';
import mail from '../../imgs/mail.jpg';
import '../../css/HomeFooter.css';

function Footer() {
    return (
        <div class="div-footer">
            <div  class="inner_footer">
                <div id="footer-box1" class="footer-boxes">
                    <a href="#" ><img id="footer-logo" src={footer_img} alt="logo" ></img></a>
                    
                    <div class="socials">
                        <br></br>
                        <a href="#"><img src={facebook} alt='facebook' ></img></a>
                        <a href="#"><img src={instagram}alt='instagram' ></img></a>
                        <a href="#"><img src={twitter} alt='twitter' ></img></a>
                        <a href="#"><img src={youtube} alt='youtube' ></img></a>
                    </div>
                </div>

                <div id="footer-box2" class="footer-boxes">
                    <h1><span>YuKa </span> Center</h1>
                    <p>we help lienholders and law firms
                            work better together.      
                    </p>
                    <div class="contact">
                        <span><img src={phone}alt='phone'></img>&nbsp;+306988083143</span><br></br>
                        <span><img src={mail}alt='mail'></img>&nbsp;info@yuka.com</span>
                    </div>
                </div>
                <div id="footer-box3" class="footer-boxes">
                    <h2>Quick Links</h2>
                    <ul>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Services</li></a>
                        <a href="#"><li>Gallery</li></a>
                        <a href="#"><li>Terms</li></a>
                    </ul>
                </div>    
            </div>
            <div class="footer-bottom">
                <h5> &copy;2020 yuka.com | Designed by YuKa </h5>
            </div>
        </div>
    );
}

export default Footer;