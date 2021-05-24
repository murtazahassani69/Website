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

function ShiftPictures() {
  const responsive={
      0:{
          items:1
      },
      500:{
        items:2
      },
      768:{
        items:3
      },
      992:{
        items:4
      },
      1200:{
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
              <ShiftCard src='https://images.unsplash.com/photo-1587316490720-40572a9afede?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='mode5' details='Pants And Tsirt In Black'/>
              <ShiftCard src='https://images.unsplash.com/photo-1594321790594-7488598b93b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                  alt='mode6' details='Mixte Black And White Shoes'/>
              <ShiftCard src='https://images.unsplash.com/photo-1583759136431-9d70db2eb04c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                alt='mode7' details='Summer Tsirt In White'/>
              <ShiftCard src='https://images.unsplash.com/photo-1603217040830-34473db521a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='mode8' details='Complet Clothes Jean, Summer Tsirt And Shoes'/>
              <ShiftCard src='https://images.unsplash.com/photo-1534445810636-67e8b1dbf706?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='mode9' details='New SkyBlue Clothes'/>
              <ShiftCard src='https://images.unsplash.com/photo-1528841684330-994c5cca9d69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='mode10' details='Jacket and Tsirt Black and White'/>
              
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
          We built all what you need, please select one
        </h3>
        <hr class='liveCV-central-headdown'></hr>
          <ShiftPictures />

      </div>
  );
}

export default Central;