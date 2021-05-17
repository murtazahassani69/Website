import React from "react";
import "../../../css/TemplateDisplayFooter.css";

function Footer() {
  return (
    <div id="TemplatesFooterId" className="templateDisplay-footer">
      <div className="templateDisplay-footer-div">
        <div className="templateDisplay-footer-menu">
          <h2>Menu</h2>
          <div className="templateDisplay-footer-menu-link">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Our work</a>
          </div>
        </div>

        <div className="templateDisplay-footer-socialMedia">
          <h2>Social Media</h2>
          <div className="templateDisplay-footer-socialMedia-link">
            <a href="#">
              <img
                src="https://toppng.com/uploads/preview/facebook-logo-small-size-11563480515rbrhidrop9.png"
                alt="facebook"
              />
              <span>facebook</span>
            </a>
            <a href="#">
              <img
                src="https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png"
                alt="Twitter"
              />
              <span>Twitter</span>
            </a>
            <a href="#">
              <img
                src="https://insatpress.tn/wp-content/uploads/2019/08/YfpFOL-logo-instagram-free-transparent.png"
                alt="Instagam"
              />
              <span>Instagram</span>
            </a>
          </div>
    <div className='templateDisplay-footer'>
        <div className='templateDisplay-footer-div'>
            <div className='templateDisplay-footer-menu'>
                <h2>Menu</h2>
                <div className='templateDisplay-footer-menu-link'>
                    <a href='/'>Home</a>
                    <a href='/about'>About us</a>
                    <a href='/Login'>Sign In</a>
                    <a href='/signUp'>Sign Up</a>
                </div>
            </div>

            <div className='templateDisplay-footer-socialMedia'>
                <h2>Social Media</h2>
                <div className='templateDisplay-footer-socialMedia-link'>
                    <a href='#'><img src='https://toppng.com/uploads/preview/facebook-logo-small-size-11563480515rbrhidrop9.png' alt='facebook' /><span>facebook</span></a>
                    <a href='#'><img src='https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png' alt='twitter' /><span>twitter</span></a>
                    <a href='#'><img src='https://insatpress.tn/wp-content/uploads/2019/08/YfpFOL-logo-instagram-free-transparent.png' alt='Instagam' /><span>Instagram</span></a>
                    <a href="mailto:someone@example.com"><img src="https://www.freeiconspng.com/uploads/email-icon--flat-gradient-social-iconset--limav-6.png" alt="email" /> <span>email</span></a>
                </div>
            </div>
        </div>
        <div className='templateDisplay-footer-copyRight'>
            <p>© Eksi-Nous Web Development Team 2021</p>
        </div>
      </div>
      <div className="templateDisplay-footer-copyRight">
        <p>© Amnick Web Development Team 2021</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Footer;
