import React from 'react';
import '../../css/LiveCVCentral.css';
import OwlCarousel from "react-owl-carousel3";

import TempJ1 from "../Demo/TemplateDisplay/imgs/temp-j1.png";
import TempMa1 from "../Demo/TemplateDisplay/imgs/temp-ma1.png";
import TempY1 from "../Demo/TemplateDisplay/imgs/temp-y1.png";
import TempY2 from "../Demo/TemplateDisplay/imgs/temp-y2.png";
import TempB1 from "../Demo/TemplateDisplay/imgs/temp-b1.png";
import TempMu1 from "../Demo/TemplateDisplay/imgs/temp-mu1.png";
import TempJ2 from "../Demo/TemplateDisplay/imgs/temp-j2.png";

import TempJ3 from "../Demo/TemplateDisplay/imgs/temp-j3.png";
import TempB2 from "../Demo/TemplateDisplay/imgs/temp-b2.png";
import TempY3 from "../Demo/TemplateDisplay/imgs/temp-y3.png";
import TempMu2 from "../Demo/TemplateDisplay/imgs/temp-mu2.png";
import TempMa2 from "../Demo/TemplateDisplay/imgs/rp_1.png";

import AOS from "aos";
import "aos/dist/aos.css";


function DisplayResAni() {
  return (
    <section className="liveCV-CentralPage">
      <div className="JaTAniCentralContainer">
        <p className="liveCV-TempDisplayText">
          We're wishing you GoodLuck on your job search after selecting one of
          the resumes tha'ts matches your need!
        </p>
        <div id="PortfolioId" className="JaTAniCentralContent">
          <a href="/templateJ3" id="JaTAniTag">
            <DisplayAniTemp
              img={TempJ3}
              heading="Your Prefered Resume Template"
              paragph="Just click and fill in your details or you can let one of our team members do it for you."
            />
          </a>
          <a href="/templateB2" id="JaTAniTag">
            <DisplayAniTemp
              img={TempB2}
              heading="Your Prefered Resume Template"
              paragph="Just click and fill in your details or you can let one of our team members do it for you."
            />
          </a>
          <a href="/templateY3" id="JaTAniTag">
            <DisplayAniTemp
              img={TempY3}
              heading="Your Prefered Resume Template"
              paragph="Just click and fill in your details or you can let one of our team members do it for you."
            />
          </a>
          <a href="/templateMu2" id="JaTAniTag">
            <DisplayAniTemp
              img={TempMu2}
              heading="Your Prefered Resume Template"
              paragph="Just click and fill in your details or you can let one of our team members do it for you."
            />
          </a>
          <a href="/templateJ2" id="JaTAniTag">
            <DisplayAniTemp
              img={TempMa2}
              heading="Your Prefered Resume Template"
              paragph="Just click and fill in your details or you can let one of our team members do it for you."
            />
          </a>
        </div>
        <a href="#" class="scroll-up">
          <i class="fa fa-angle-double-up"></i>
        </a>
      </div><hr class='liveCV-central-headdown'></hr>
    </section>
  );
}

function DisplayAniTemp(props) {
  AOS.init({
    offset: 300,
    duration: 1000,
  });
  return (
    <div className="JaTAniSection">
      <div className="JaTAniTemplateIamge" data-aos="fade-down">
        <img src={props.img} alt="" />
      </div>
      <h3 className="JaTAniTemplateHead">{props.heading}</h3>
      <p className="JaTAniTemplateText">{props.paragph}</p>
    </div>
  );
}

function ShiftPictures() {
  const responsive={
      0:{
          items:1
      },
      600:{
        items:2
      },
      900:{
        items:3
      },
      1025:{
        items:4
      },
      1444:{
          items:5
      }
  }
  return (
    <div className='liveCV-central-carousContent'>
        <OwlCarousel 
            className="liveCV-owl-theme"
            loop  dotsContainer={false} dots={false} autoplay smartSpeed={1500}  nav
            responsive={responsive}
        >
              <ShiftCard src={TempJ1}
                    alt='mode1' details='Just click and fill in your details'/>
              <ShiftCard src={TempMa1}
                alt='mode2' details='Just click and fill in your details'/>
              <ShiftCard src={TempY1} 
                alt='mode3' details='Just click and fill in your details'/>
              <ShiftCard src={TempY2}
                alt='mode4' details='Just click and fill in your details'/>
               <ShiftCard src={TempB1}
                alt='mode4' details='Just click and fill in your details'/>
               <ShiftCard src={TempMu1}
                alt='mode4' details='Just click and fill in your details'/>
               <ShiftCard src={TempJ2}
                alt='mode4' details='Just click and fill in your details'/>
               <ShiftCard src={TempJ3}
                alt='mode4' details='Just click and fill in your details'/>
               <ShiftCard src={TempB2}
                alt='mode4' details='Just click and fill in your details'/>
               <ShiftCard src={TempY3}
                alt='mode4' details='Just click and fill in your details'/>
               <ShiftCard src={TempMu2}
                alt='mode4' details='Just click and fill in your details'/>
               <ShiftCard src={TempMa2}
                alt='mode4' details='Just click and fill in your details'/>
             
        </OwlCarousel>
    </div>
  );
}

function ShiftCard({src, alt, details}){
  return(
          <a href='#'><div className='liveCV-central-card'> 
            <div className='liveCV-central-shiftImg'>
                <img src={src} alt={alt} className="liveCV-central-carouselImg" />
            </div> 
            <span>{details}</span>
          </div></a>
  )
}
 

function Central() {
  return (
      <div>
        <h3 class='liveCV-central-head'>
        <i class="fas fa-clipboard-check"></i> We built all what you need, please select one
        </h3>
        <hr class='liveCV-central-headdown'></hr>
          
         <DisplayResAni />
         <ShiftPictures />
      </div>
  );
}

export default Central;