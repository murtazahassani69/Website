import React from 'react';
import '../../../css/StoreFooter.css';


function Services () {
  return(
    <div className='storeFooterLinkItems'>
      <h3>Services</h3>
      <ul>
        <li><a href='#'  className='storeFooterLink'>Online Shopping</a></li>
        <li><a href='#'  className='storeFooterLink'>Shipping and Delivery</a></li>
        <li><a href='#'  className='storeFooterLink'>My Orders</a></li>
        <li><a href='#'  className='storeFooterLink'>See More</a></li>
      </ul>
    </div>
  )
}

function Information () {
  return(
    <div className='storeFooterLinkItems'>
      <h3>Legal Information</h3>
      <ul>
        <li><a href='#'  className='storeFooterLink'>GDPR</a></li>
        <li><a href='#'  className='storeFooterLink'>Terms and Condition</a></li>
        <li><a href='#'  className='storeFooterLink'>Privacy Policy</a></li>
        <li><a href='#'  className='storeFooterLink'>Right of Withdrawal</a></li>
        <li><a href='#'  className='storeFooterLink'>Cookie Settings</a></li>
      </ul>
    </div>
  )
}

function About () {
  return(
    <div className='storeFooterLinkItems'>
      <h3>About Us</h3>
      <ul>
        <li><a href='#'  className='storeFooterLink'>About Us</a></li>
        <li><a href='#'  className='storeFooterLink'>Store Locator</a></li>
        <li><a href='#'  className='storeFooterLink'>All Stores</a></li>
        <li><a href='#'  className='storeFooterLink'>Press Contacts</a></li>
        <li><a href='#'  className='storeFooterLink'>Careers</a></li>
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <>
      <div class="storeFooterContainer">
        <div class="storeFooterLinks">
          <Services />
          <Information />
          <About />
          <div className='storeFooterSocial'>
            <div className='storeFooterSocialLink'>
            <h3>Social</h3>
              <a href="#" class="storeFooterIcon"><i class="fab fa-facebook"></i></a>
              <a href="#" class="storeFooterIcon"><i class='fab fa-twitter'></i></a>
              <a href="#" class="storeFooterIcon"><i class='fab fa-instagram'></i></a>
              <a href="#" class="storeFooterIcon"><i class='fab fa-youtube'></i></a>
            </div>

            <hr className='storeHr'></hr>

            <div className='storeFooterPaymentLink'>
            <h3>Payment Methods</h3>
              <a href="#" class="storeFooterIcon"><i class='fab fa-cc-visa'></i></a>
              <a href="#" class="storeFooterIcon"><i class='fab fa-cc-mastercard'></i></a>
              <a href="#" class="storeFooterIcon"><i class='fab fa-paypal'></i></a>
            </div>
          </div>
        </div>
      </div>
        <a href="#" class="storeCopyright">&copy; {new Date().getFullYear()} JALL INC | All right reserved | Terms of Service | Privacy</a>
      
    </>
  );
}

export default Footer;