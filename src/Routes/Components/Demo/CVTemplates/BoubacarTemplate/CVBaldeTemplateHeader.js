import React from 'react';
import {Link} from 'react-router-dom';
import '../../../../css/CVBaldeTemplateHeader.css';

function Header() {
    return (
          <div className="CVBaldeTemp-div-header">
              <Menu />
              <Section />
          </div>
    );
}

function Section(){
    return(
        <section className="CVBaldeTemp-section">
            <div className="CVBaldeTemp-div-section">
                <h1>Designer, Front-end Developer & Mentor</h1>
                <p>I design and code beautifully simple things, and I love what I do.</p>
                <img src="https://mattfarley.ca/img/mf-avatar.svg" alt="Image" id="CVBaldeTemp-img-section" />
            </div>
            <img src="https://mattfarley.ca/img/hero.svg" alt="Image" id="CVBaldeTemp-img2-section" />
        </section>
    )
}

function Menu() {
    return (
          <div className="CVBaldeTemp-div-menu">
                <img src="https://mattfarley.ca/img/mf-logo.svg" alt="Logo" className="CVBaldeTemp-div-logo" />
                <nav className="CVBaldeTemp-div-toggle">
                    <input type="checkbox" id='CVBaldeTemp-check'/>
                    <label htmlFor="CVBaldeTemp-check" className='checkbtn'>&#9776;</label>
                    <ul className="CVBaldeTemp-div-menu-right">
                        <li className="CVBaldeTemp-div-menu-right-text">Mentorship</li>
                        <li className="CVBaldeTemp-div-menu-right-button">Say Hello</li>
                        <a href={`/templateB1Pdf`}><li className="CVBaldeTemp-div-menu-right-text">Pdf</li></a>
                        <a href='/templates'><li className="CVBaldeTemp-div-menu-right-text">Back</li></a>
                    </ul>
                </nav>
          </div>
    );
}


export default Header;
