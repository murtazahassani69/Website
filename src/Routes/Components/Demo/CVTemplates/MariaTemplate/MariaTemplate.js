import React, { Component } from 'react';
import '../../../../css/CVMariaTemplate.css';
import user_img from "./imgs/default-user.png";
import user_sign from "./imgs/signature.png";

import {FaTwitterSquare,FaLinkedin,FaFacebookSquare, FaRunning, FaHandsHelping,FaUmbrellaBeach,FaMapMarkerAlt} from 'react-icons/fa';
import { ImBooks,ImPhone} from "react-icons/im";
import { TiChevronRight,TiMail } from "react-icons/ti";


function MariaTemp(){
    return ( 
        <div className="CVMarTemp-container">
            <div className="CVMarTemp-left">
                <div className="CVMarTemp-profile">
                    <img src={user_img} alt="user" className="CVMarTemp-profile_img"/>
                </div>
                <div className="CVMarTemp-content">
                    <h1 className="CVMarTemp-content-h1"><span>Hi,</span> I'm Ben Doe</h1>
                    <h3>Web developer</h3>
                    <div className="CVMarTemp-profile-info">
                        <p className="CVMarTemp-profile-infop"><FaMapMarkerAlt size={18} color='#0072b1'/>United Kingdom,London</p>
                        <p className="CVMarTemp-profile-infop"><TiMail size={18} color='#0072b1'/>xxxx@wwww.com</p>
                        <p className="CVMarTemp-profile-infop"><ImPhone size={18} color='#0072b1'/>+44 00 0000 0000</p>
                    </div>
                    <p className="CVMarTemp-description1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum. In hendrerit gravida rutrum quisque. Egestas maecenas pharetra convallis posuere. Ut eu sem integer vitae justo eget magna fermentum iaculis. 
                    </p>
                    <p className="CVMarTemp-description2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum. In hendrerit gravida rutrum quisque. Egestas maecenas pharetra convallis posuere. Ut eu sem integer vitae justo eget magna fermentum iaculis.</p>
               </div>
               <div className="CVMarTemp-sign">
                    <img src={user_sign} alt="user" className="CVMarTemp-sign_img"/>
                </div>
            
                <ul class="CVMarTemp-socialicons">
                    <li><a href="#" className="CVMarTemp-socialicons-link" ><FaLinkedin size={30} color='#0072b1'/></a></li>
                    <li><a href="#" className="CVMarTemp-socialicons-link" > <FaTwitterSquare size={30} color='#1DA1F2'  /></a></li>
                    <li><a href="#" className="CVMarTemp-socialicons-link" > <FaFacebookSquare size={30} color='#4169E1'/></a></li>
                 </ul>
            </div>
            
            
            <div className="CVMarTemp-right"> 

                <section className="CVMarTemp-section">
                    <h2 className="CVMarTemp-section-h2">My Services</h2>
                    <div className="CVMarTemp-services">
                        <div className="CVMarTemp-service">
                        <TiChevronRight size={20} color='#0072b1'/>
                            <h4 className="CVMarTemp-h4 ">Web development</h4>
                            <p className="CVMarTemp-service-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="CVMarTemp-service">
                        <TiChevronRight size={20} color='#0072b1'/>
                            <h4 className="CVMarTemp-h4">Web design</h4>
                            <p className="CVMarTemp-service-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="CVMarTemp-service">
                        <TiChevronRight size={20} color='#0072b1'/>
                            <h4 className="CVMarTemp-h4">Mobile App development</h4>
                            <p className="CVMarTemp-service-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="CVMarTemp-service">
                        <TiChevronRight size={20} color='#0072b1'/>
                            <h4 className="CVMarTemp-h4">Digital Marketing</h4>
                            <p className="CVMarTemp-service-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>                    
                    </div>
                </section>



               
                <section className="CVMarTemp-section ">
                    <h2 className="CVMarTemp-section-h2">Skills</h2>
                    <div className="CVMarTEmp-skills">
                        <div className="CVMarTemp-expertise">HTML5</div>
                        <div className="CVMarTemp-expertise">CSS3</div>
                        <div className="CVMarTemp-expertise"> JavaScript</div>
                        <div className="CVMarTemp-expertise">MySQL</div>
                        <div className="CVMarTemp-expertise">Node.js</div>
                    </div>
                </section>

                <section className="CVMarTemp-section ">
                    <h2 className="CVMarTemp-section-h2">Soft Skills</h2>
                    <div className="CVMarTEmp-skills">
                        <div className="CVMarTemp-expertise">Organization</div>
                        <div className="CVMarTemp-expertise">Critical Thinking</div>
                        <div className="CVMarTemp-expertise"> Teamwork</div>
                        <div className="CVMarTemp-expertise">Creativity</div>
                        <div className="CVMarTemp-expertise">Communication</div>
                    </div>
                </section>

                <section className="CVMarTemp-section">
                    <h2 className="CVMarTemp-section-h2">Work Experience</h2>
                        <div className="CVMarTemp-experience">
                            <div className="CVMarTemp-dot"></div>
                            <small>2015-Present</small>
                            <h3 className="CVMarTemp-experience-h3"> Senior Full Stack Developer</h3>
                            <h4 className="CVMarTemp-h4">Beat</h4>
                            <p className="CVMarTemp-experience-text">United Kingdom,London</p>
                        </div>
                        <div className="CVMarTemp-experience">
                            <div className="CVMarTemp-dot"></div>
                            <small>2012-2015</small>
                            <h3 className="CVMarTemp-experience-h3">Web Developer</h3>
                            <h4 className="CVMarTemp-h4">ZTE Company</h4>
                            <p className="CVMarTemp-experience-text">United Kingdom,London</p>
                        </div>
                        <div className="CVMarTemp-experience">
                            <div className="CVMarTemp-dot"></div>
                            <small>2010-2015</small>
                            <h3 className="CVMarTemp-experience-h3">Frontend Web Developer</h3>
                            <h4 className="CVMarTemp-h4">Xyz Tech</h4>
                            <p className="CVMarTemp-experience-text">United Kingdom,London</p>
                        </div>
                        <div className="CVMarTemp-experience">
                            <div className="CVMarTemp-dot"></div>
                            <small>2010-2012</small>
                            <h3 className="CVMarTemp-experience-h3">Junior Software Engineer</h3>
                            <h4 className="CVMarTemp-h4">NOKIA</h4>
                            <p className="CVMarTemp-experience-text">Espoo, Finland</p>
                        </div>
                </section>
                <section className="CVMarTemp-section">
                    <h2 className="CVMarTemp-section-h2">Education</h2>
                        <div className="CVMarTemp-experience">
                            <div className="CVMarTemp-dot"></div>
                            <small>2002-2006</small>
                            <h3 className="CVMarTemp-experience-h3">Software Systems Engineering Phd</h3>
                            <h4 className="CVMarTemp-h4">University College London </h4>
                            <p className="CVMarTemp-experience-text">United Kingdom,London</p>
                        </div>
                        <div className="CVMarTemp-experience">
                            <div className="CVMarTemp-dot"></div>
                            <small>2010-2012</small>
                            <h3 className="CVMarTemp-experience-h3">Software Systems Engineering MSc</h3>
                            <h4 className="CVMarTemp-h4">University College London </h4>
                            <p className="CVMarTemp-experience-text">United Kingdom,London</p>
                        </div>
                        <div className="CVMarTemp-experience">
                            <div className="CVMarTemp-dot"></div>
                            <small>2007-2010</small>
                            <h3 className="CVMarTemp-experience-h3"> Software Engineering BSc</h3>
                            <h4 className="CVMarTemp-h4">Lorem ipsum</h4>
                            <p className="CVMarTemp-experience-text">United Kingdom,London</p>
                        </div>
                </section>

                <section className="CVMarTemp-section">
                
                <h2 className="CVMarTemp-section-h2">Interests</h2>
                <div className="CVMarTemp-interests">
                    <div className="CVMarTemp-interest">
                        <FaRunning size={20} color='#0072b1'/>
                        <h4 className="CVMarTemp-interest-h4">Sports</h4>
                        <p className="CVMarTemp-interest-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="CVMarTemp-interest">
                    <ImBooks size={20} color='#0072b1'/>
                        <h4 className="CVMarTemp-interest-h4">Books</h4>
                        <p className="CVMarTemp-interest-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="CVMarTemp-interest">
                    <FaHandsHelping size={20} color='#0072b1'/>
                        <h4 className="CVMarTemp-interest-h4">Volunteer Work</h4>
                        <p className="CVMarTemp-interest-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="CVMarTemp-interest">
                    <FaUmbrellaBeach size={20} color='#0072b1'/>
                        <h4 className="CVMarTemp-interest-h4">Travel</h4>
                        <p className="CVMarTemp-interest-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                 </div>
             </section>
    
             <div><p href="#" className="CVMarTemp-copyright"> &copy; {new Date().getFullYear()} Ben Doe | Developed by Maria.</p></div>
             
            </div>
        </div>
    );
}
    
export default MariaTemp;