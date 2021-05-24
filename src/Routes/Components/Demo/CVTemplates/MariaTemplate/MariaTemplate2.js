import React, { Component } from 'react';
import '../../../../css/CVMariaTemplate2.css';
import {FaTwitterSquare,FaLinkedin,FaFacebookSquare, FaRunning, FaHandsHelping, FaDivide} from 'react-icons/fa';
import MarVid from "./imgs/marTemp.mp4";
import MarProj1 from "./imgs/marproj.jpg";
import MarProj2 from "./imgs/marproj2.jpg";
import MarProj3 from "./imgs/marproj3.jpg";
import MarProj4 from "./imgs/marproj4.jpg";
import MarProj5 from "./imgs/marproj5.jpg";

function MariaTemp2(){
    return(
        <div className="CVMarTemp2-container">
            <Header/>
            <Center/>
            <Maindesc/>
            <Portofolio/>
            <Footer/>
        </div>
    )
}


function Header(){
  return(
      <div className="CVMarTemp2-header">
        <div className="CVMarTemp2-header-name">
        <h1 className="CVMarTemp2-header-fname">Helen Elien</h1> 
        <span className="CVMarTemp2-header-proffesion">Web Developer</span>
      </div>
      <div className="CVMarTemp2-header-right">
        <div className="CVMarTemp2-header-icons">
          <div className="CVMarTemp2-header-icon"><a href="#" className="CVMarTemp-socialicons-link" ><FaLinkedin size={20} color='#0072b1'/></a></div>
          <div className="CVMarTemp2-header-icon"><a href="#" className="CVMarTemp-socialicons-link" ><FaTwitterSquare size={20} color='#1DA1F2'/></a></div>
          <div className="CVMarTemp2-header-icon"><a href="#" className="CVMarTemp-socialicons-link" ><FaFacebookSquare size={20} color='#4169E1'/></a></div>
        </div>
        <a className="CVMarTemp2-header-btn" href="mailto:sdsd@sdsdsdsd.com">Contact me</a>
        <a className="CVMarTemp2-header-back" href='/templates'>&larr;Back</a>
      </div>
    </div>
  )
}


function Center(){
  return(
    <div className="CVMarTemp2-center">
      <div className="CVMarTemp2-center-div">
        <h1 className="CVMarTemp2-heading">Hi, I'm Helen Elien</h1>
        <p className="CVMarTemp2-heading2">Nice to meet you</p>
        <button className="CVMarTemp2-center-btn">Explore my work</button>
      </div>
    </div>  
  )
}


function Maindesc(){
  return(
    <div className="CVMarTemp2-description">
      <div className="CVMarTemp2-descr-left">
        <p className="CVMarTemp2-descr-leftp">I'm a creative Front-End Developer offering 9+ years of experience providing high-impact web solutions for diverse industry organizations.I'm skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies.</p>
        <p className="CVMarTemp2-descr-leftp">Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.</p>
      </div>
      <div className="CVMarTemp2-descr-right"> 
      
        <video controls width="400" height="300" autoplay="true" muted class="CVMarTemp2-video" source src={MarVid} type="video/mp4" ></video>
   
      </div>     
    </div>  
  )
}


function Portofolio(){
  return(
    <section className="CVMarTemp2-portofolio">
      <p className="CVMarTemp2-portofolio-p">My recent work</p>
      <p className="CVMarTemp2-portofolio-p2">Here are a few design projects I've worked on recently. Want to see more? <a href="mailto:sdsd@sdsdsdsd.com">Email me</a></p>
      <div className="CVMarTemp2-portofolio-all">
        <div className="CVMarTemp2-portofolio-prj">
          <div className="CVMarTemp2-portofolio-fig">
          <a href=""></a>
           <img className="CVMarTemp2-portofolio-img" src={MarProj1} alt="Project 1"/>
           <span className="CVMarTemp2-portofolio-span">Project 1</span>
            <p className="CVMarTemp2-fig-p">A platform for renting houses</p>
          </div>
        </div>
        <div className="CVMarTemp2-portofolio-prj">
          <div className="CVMarTemp2-portofolio-fig">
            <a href=""></a>
            <img className="CVMarTemp2-portofolio-img" src={MarProj2} alt="Project 2"/>
            <span className="CVMarTemp2-portofolio-span">Project 2</span>
            <p className="CVMarTemp2-fig-p">A flower e-shop</p>
          </div>
        </div>
        <div className="CVMarTemp2-portofolio-prj">
          <div className="CVMarTemp2-portofolio-fig">
            <a href=""></a>
            <img className="CVMarTemp2-portofolio-img" src={MarProj3} alt="Project 3"/>
            <span className="CVMarTemp2-portofolio-span">Project 3</span>
            <p className="CVMarTemp2-fig-p">A blog about music</p>
          </div>
        </div>
        <div className="CVMarTemp2-portofolio-prj">
          <div className="CVMarTemp2-portofolio-fig">
            <a href=""></a>
            <img className="CVMarTemp2-portofolio-img" src={MarProj4} alt="Project 4"/>
            <span className="CVMarTemp2-portofolio-span">Project 4</span>
            <p className="CVMarTemp2-fig-p">A blog about air tickets</p>
          </div>
        </div>
        <div className="CVMarTemp2-portofolio-prj">
          <div className="CVMarTemp2-portofolio-fig">
            <a href=""></a>
            <img  className="CVMarTemp2-portofolio-img"src={MarProj5} alt="Project 5"/>
            <span className="CVMarTemp2-portofolio-span">Project 5</span>
            <p className="CVMarTemp2-fig-p">A space app</p>
          </div>
        </div>
      </div>  
    </section>     
    
  )
}

function Footer(){
  return(
    <section className="CVMarTemp2-footer">
        <p className="CVMarTemp2-footer-p">Could I help you?</p>
        <div className='CVMarTemp2-footer-div'>
          <div className="CVMarTemp2-footer-nav">
            <ul className="CVMarTemp2-footer-list">
                <li className="CVMarTemp2-footer-item"><a href="#" className="CVMarTemp2-footer-link">Home</a></li>
                <li className="CVMarTemp2-footer-item"><a href="#" className="CVMarTemp2-footer-link">About me</a></li>
                <li className="CVMarTemp2-footer-item"><a href="#" className="CVMarTemp2-footer-link">Portofolio</a></li>
            </ul>
          </div>
          <div className="CVMarTemp2-footer-cpw">
            <p class="CVMarTemp2-footer-cpwcopyright">
              Copyright &copy; 2021 by Hellen Elien.          
            </p>
          </div>
       </div>
    </section>
   )
}

export default MariaTemp2;