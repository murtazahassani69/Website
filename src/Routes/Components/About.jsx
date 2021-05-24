import React from 'react';
import HomeMenu from "./Home/Menu";
import AboutMenu from './About/AboutMenu';
import AboutHead from './About/AboutHead';
import AboutCenterTop from './About/AboutCenterTop';
import AboutCenter from './About/AboutCenter';
import AboutCenterBottom from './About/AboutCenterBottom';
import HomeFooter from './Home/Footer';

function About() {
    return (
        <div>
            {/* <HomeMenu /> */}
            <AboutMenu />
            <AboutHead />
            <AboutCenterTop />
            <AboutCenter />
            <AboutCenterBottom />
            <HomeFooter />
        </div>
    )
}

export default About
