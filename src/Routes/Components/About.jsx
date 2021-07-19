import React, { useState } from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';

// import AboutMenu1 from './Home/About/AboutMenu';
import AboutMenu from "./About/AboutMenu";
import MenuToggle from './About/MenuToggle';
import AboutHead from './About/AboutHead';
import AboutCenterTop from './About/AboutCenterTop';
import AboutCenter from './About/AboutCenter';
import AboutCenterBottom from './About/AboutCenterBottom';
import HomeFooter from '../Components/Home/Footer';


function About() {
    const [isOpen, setIsOpen] = useState(false)
    
    const aboutToggle = () => {
        setIsOpen(!isOpen)
    }

    const generalStyling = {
        background: '#bed4e0d7'
    }

    return (
        <Router style={generalStyling}>
            <MenuToggle isOpen={isOpen} aboutToggle={aboutToggle} />
            <AboutMenu aboutToggle={aboutToggle} />
            {/* <AboutMenu1 /> */}
            <div style={generalStyling}>
                <AboutHead />
                <AboutCenterTop />
                <AboutCenter />
                <AboutCenterBottom />
                <HomeFooter />
            </div>
        </Router>
    )
}

export default About;
