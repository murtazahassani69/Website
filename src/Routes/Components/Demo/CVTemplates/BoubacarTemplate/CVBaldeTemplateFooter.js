import React from 'react';
import '../../../../css/CVBaldeTemplateFooter.css';


function Main() {
  return (
        <div className="CVBaldeTemp-footer">
            <div className="CVBaldeTemp-div-footer">
                <img src='https://mattfarley.ca/img/mf-logo-white.svg' alt='Logo'/>
                <p>Living, learning, & leveling up one day at a time.</p>
                <div className='CVBaldeTemp-div-sMedia'>
                    <span><i className="fab fa-twitter"></i></span>
                    <span><i className="fab fa-dribbble"></i></span>
                    <span><i className="fab fa-linkedin-in"></i></span>
                    <span><i className="fab fa-angellist"></i></span>
                    <span><i className="fab fa-product-hunt"></i></span>
                    <span><i className="fas fa-envelope"></i></span>
                </div>
                <span>Handcrafted by me<i className="fas fa-copyright"></i>2021</span>
                <div>
                    <img src='https://bulma.io/images/made-with-bulma--white.png' />
                </div>
            </div>
        </div>
  );
}

export default Main;
