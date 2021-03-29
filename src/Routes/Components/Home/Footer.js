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
        <div className="div-footer">
            <div  className="inner_footer">
                <div id="footer-box1" className="footer-boxes">
                    <a href="#" ><img id="footer-logo" src={footer_img} alt="logo" ></img></a>
                    
                    <div className="socials">
                        <br></br>
                        <a href="#"><img src={facebook} alt='facebook' ></img></a>
                        <a href="#"><img src={instagram}alt='instagram' ></img></a>
                        <a href="#"><img src={twitter} alt='twitter' ></img></a>
                        <a href="#"><img src={youtube} alt='youtube' ></img></a>
                    </div>
                </div>

                <div id="footer-box2" className="footer-boxes">
                    <h1><span>YuKa </span> Center</h1>
                    <p>we help lienholders and law firms
                            work better together.      
                    </p>
                    <div className="contact">
                        <span><img src={phone}alt='phone'></img>&nbsp;+306988083143</span><br></br>
                        <span><img src={mail}alt='mail'></img>&nbsp;info@yuka.com</span>
                    </div>
                </div>
                <div id="footer-box3" className="footer-boxes">
                    <h2>Quick Links</h2>
                    <ul>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Services</li></a>
                        <a href="#"><li>Gallery</li></a>
                        <a href="#"><li>Terms</li></a>
                    </ul>
                </div>    
            </div>
            <div className="footer-bottom">
                <h5> &copy;2020 yuka.com | Designed by YuKa </h5>
            </div>
        </div>
    );
}

export default Footer;