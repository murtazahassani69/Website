import React from 'react'
import styled from 'styled-components'
import { deviceSize } from './Assets/responsive';

import Background from './imgs/background.jpg'
import Video6Nous from './imgs/w-d.mp4'

const ACBottomSection = styled.div`
    display: grid;
    background: #ccc;
    margin: 2rem 0;
    padding: auto;
`;

const ACBottomContainer = styled.div`
    display: grid;
    justify-content: space-around;
    margin: 0 0 2rem;
    padding: 2rem 5rem;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: center;

    @media screen and (max-width: ${deviceSize.tablet}px) {
        margin: 0px;
    }

    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }
`;

const FLink = styled.a`
    color: #000639;
    font-size: 17px;
    text-align: start;
    align-item: flex-start;
    font-weight: 400;
    text-decoration: none;

    &:not(:last-of-type) {
        margin-bottom: 1.5em;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-left: 1rem;

        &:not(:last-of-type) {
            margin-bottom: .7em;
        }
    }
`;

const ACBottomTitle = styled.h2`
    color: #000639;
    font-size: 35px
    text-align: center;
    line-height: 1.4
    font-wight: 500;
    padding-top: 2rem;
    text-transform: uppercase;
`;

function AboutCenterBottom() {
    return (
        <div>
            <ACBottomSection>
                <ACBottomTitle>Our Value</ACBottomTitle>
                <ACBottomContainer>
                    <ContentContainer>
                        <FLink>Always creative</FLink>
                        <FLink>Stay young</FLink>
                        <FLink>Be proactive</FLink>
                    </ContentContainer>
                    <ContentContainer>
                        <FLink>Innovate in every way</FLink>
                        <FLink>Commited to your team</FLink>
                        <FLink>Always your best</FLink>
                    </ContentContainer>
                    <ContentContainer>
                        <FLink>Never stop learning</FLink>
                        <FLink>Communicate</FLink>
                        <FLink>Live smarter, not harder</FLink>
                    </ContentContainer>
                </ACBottomContainer>
            </ACBottomSection>
            {/* <Video /> */}
            {/* HERE WE HAVE A SHORT VIDEO ABOUT EKSI-NOUS TEAM IF NESSECCARY is been comment out*/}
        </div>
    )
}

// function Video(){
//     return(
//         <VideoContainer>
//             <VideoContent>
//                 <VideoTitle>
//                     <VideoTitleH3>SHORT VIDEO ABOUT US</VideoTitleH3>
//                 </VideoTitle>
//                 <VideoIframe>
//                     <iframe src={Video6Nous}
//                         frameBorder="0" 
//                         allowFullScreen
//                         autoPlay muted
//                     ></iframe>
//                 </VideoIframe>
//             </VideoContent>
//         </VideoContainer>
//     )
    
// } 

// const VideoContainer = styled.div`
//     display: flex;
//     flex-directioin: column;
//     width: 100%;
//     position: relative;
//     justify-content: center;

// `;
// const VideoContent = styled.div`
//     display: grid;
//     padding: 3vh 6vw;
// `;
// const VideoTitle = styled.div`
//     padding: 1.5em 0;
//     font-weight: bold;
//     background-color: #2a9d8f;
// `;
// const VideoTitleH3 = styled.h3`
//     margin: 0;
//     font-size: 2em;
//     color: white;
//     text-align: center;
// `;
// const VideoIframe = styled.div`
//     width: 80%;

//     iframe {
//         width: 600px;
//         height: 335px;
//     }
// `;


export default AboutCenterBottom;