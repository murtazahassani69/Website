import React from 'react';
import styled from 'styled-components';
import { deviceSize } from './Assets/responsive';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Team1 from './imgs/team1.jpg';

const AboutCenterContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem;
    position: relative;
    left: 12.5%;

    @media screen and (max-width: ${deviceSize.tablet}px) {
        width: 95%;
        left: 0;
    }
`;

const AboutCenterContent = styled.div`width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #fff;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    @media screen and (max-width: ${deviceSize.tablet}px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

const AboutCenterInner = styled.div`
    width: 60%;
    padding: 4rem 1rem;
    transition: transform 0.2s ease-in;

    img {
        width: 25%;
        height: 30%;
        margin: .5rem;
    }
    
    @media screen and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        padding: 2rem 1rem;
        padding-bottom: 0px;
        justify-content: center;
        align-item: center;

        img {
            height: 40%;
            margin: .5rem;
        }
    }
`;

const TopSectionCard = styled.div`
    width: 40%;
    background-color: #cccccc3f;
    margin: 15px;

    @media screen and (max-width: ${deviceSize.tablet}px) {
        width: 95%;
    }
`;

const TopSectionInnerCard = styled.div`
    text-align: start;
    margin: .5rem;
    padding: .5rem;
`;

const TopSectionInnerCardHead = styled.h2`
    font-weight: 500;
    font-size: 30px;
    color: #000639;
    text-transform: uppercase;
    line-height: 1.2;
    margin: 10px 0;
`;
const TopSectionInnerCardText = styled.p`
    font-size: 16px;
    color: #000639!important;
`;

const Line = styled.span`
  width: 10%;
  display: block;
  background-color: #2a9d8f;
  padding: 1px;
`;

function AboutCenter () {

    AOS.init({
        offset: 300,
        duration: 2000
    })
    
    return(
        <AboutCenterContainer data-aos="fade-left">
            <AboutCenterContent>
                <AboutCenterInner>
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                </AboutCenterInner>
                <TopSectionCard>
                    <TopSectionInnerCard>
                        <Line />
                        <TopSectionInnerCardHead>Our Mission</TopSectionInnerCardHead>
                        <TopSectionInnerCardText>Is to let your talent been seen and to make businesses reach out. We are passionate about creating a calm, inspiring work enviroment that attracts amazing talent. We connect that talent with some amazing companies that provide mutual growth opportunities.</TopSectionInnerCardText>
                    </TopSectionInnerCard>
                </TopSectionCard>
            </AboutCenterContent>
        </AboutCenterContainer>
    )
}

export default AboutCenter;