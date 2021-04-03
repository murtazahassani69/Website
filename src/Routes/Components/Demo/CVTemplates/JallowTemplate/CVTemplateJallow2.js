import React from 'react';
import Pdf from "react-to-pdf";
import P_img1 from './imgs/p-img1.jpg';
import "../../../../css/CVTemplateJallow2.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const ref = React.createRef();

function CVTemplateJallow2() {
  AOS.init({
    offset: 300,
    duration: 1000
  })
  return (
    <>
      <div id="jallowCVTContainer">
        <Pdf targetRef={ref} filename="resume.pdf">
          {({ toPdf }) => <button id="jallowCVTemp1Pdf" onClick={toPdf}>Save Pdf</button>}
        </Pdf>

        <div className="jallowCVTPage" id="toPrint" ref={ref}>
          <div className='jallowCVTResume'>
            <nav className='jallowCVTNavContainer'>
              <div className='jallowCVTNavDiv'>
                <a href='#home' className='jallowCVTNavLogo'>Rachel Smith</a>
              </div>

              <div className='jallowCVTNavMenu'>

              <input type='checkbox' id='check' />
              <label htmlFor='check' className='jallowCVTCheckIcon'>&#9776;</label>

                <ul className='jallowCVTNavList'>
                  <li className='jallowCVTNavItem jallowTempBack'>
                    <a href='http://localhost:3000/templates' className='jallowCVTNavLink'>Back</a>
                  </li>

                  <li className='jallowCVTNavItem'>
                    <a href='#experience' className='jallowCVTNavLink'>Experience</a>
                  </li>

                  <li className='jallowCVTNavItem'>
                    <a href='#education' className='jallowCVTNavLink'>Education</a>
                  </li>

                  <li className='jallowCVTNavItem'>
                    <a href='#clients' className='jallowCVTNavLink'>Clients</a>
                  </li>

                  <li className='jallowCVTNavItem'>
                    <a href='#skills' className='jallowCVTNavLink'>Skills</a>
                  </li>

                  <li className='jallowCVTNavItem'>
                    <a href='#espertise' className='jallowCVTNavLink'>Expertise</a>
                  </li>

                  <li className='jallowCVTNavItem'>
                    <a href='#contact' className='jallowCVTNavLink'>Contact</a>
                  </li>
                </ul>
              </div>
            </nav>

            <section className='jallowCVTProfSection ProfSectionJallow' data-aos="fade-down">
              <div className='jallowCVTProfContent'>
                <div className='jallowCVTProfImg'>
                  <img src={P_img1} alt='Profile' width='250px' />
                </div>
                <div className='jallowCVTProfInformation'>
                  <h1 className='jallowCVTProfName'>Rachel Smith</h1>
                  <p className='jallowCVTProfTitle'>Developer Specialists</p>

                  <ul className='jallowCVTProfInfo'>
                    <li className='jallowCVTProfList'>
                    <strong>Phone:</strong>
                      <span className='jallowCVTProfContact'>123 888 9999</span>
                    </li>
                    <li className='jallowCVTProfList'>
                    <strong>Email:</strong>
                      <span className='jallowCVTProfContact'>info@email.com</span>
                    </li>
                    <li className='jallowCVTProfList'>
                      <strong>Address:</strong>
                      <span className='jallowCVTProfContact'>501, Terry Francois Street</span>
                    </li>
                    <li className='jallowCVTProfList'>
                    <strong>Date of Birth:</strong>
                      <span className='jallowCVTProfContact'>March 14th, 1984</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className='jallowCVTSocialTop'>
              <div className='jallowCVTSocialLink'>
                  <i class="fab fa-linkedin-in"></i>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
              </div>
            </div>

            <section className='jallowCVTSection'>
              <div className='jallowCVTSectionProfile' data-aos="fade-left">
                <h2 className='jallowCVTSectionTitle'>Profile</h2>
                <p className='jallowCVTProfileDescription'>
                I started my career as a freelance couple of years ago later got the opportunity to work at some of the big Tech Companies, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </p>
              </div>
            </section>

            {/* <!--========== EXPERIENCE ==========--> */}
            <section className='jallowCVTExpSection' data-aos="fade-right">
              <h2 className="jallowCVTSectionTitle">Experience</h2>

              <div className='jalowCVTExpContainer'>
                <div className='jalowCVTExpContent'>
                  <div className='jalowCVTExpTime'>
                    <span className='jalowCVTExpRounder'></span>
                    <span className='jalowCVTExpLine'></span>
                  </div>

                  <div className='jalowCVTExpData'>
                    <h3 className='jalowCVTExpTitle'>HCL Volt MX</h3>
                    <span className='jalowCVTExpCompany'>From 2019 to 2021 | HCL Volt MX</span>
                    <p className="jalowCVTExpDescription">Developing a dev-up platform that empowers professional developers, enterprise architects, and digital designers to rapidly deliver consumer-grade apps.<br />
                    </p>
                  </div>
                </div>

                <div className='jalowCVTExpContent'>
                  <div className='jalowCVTExpTime'>
                    <span className='jalowCVTExpRounder'></span>
                    <span className='jalowCVTExpLine'></span>
                  </div>

                  <div className='jalowCVTExpData'>
                    <h3 className='jalowCVTExpTitle'>Mobile Application </h3>
                    <span className='jalowCVTExpCompany'>From 2017 to 2019 | App Tech</span>
                    <p className="jalowCVTExpDescription">We Built the most fastest,  mobile speed application secure and easy to use to run both Apple and Android  </p>
                  </div>
                </div>

                <div className='jalowCVTExpContent'>
                  <div className='jalowCVTExpTime'>
                    <span className='jalowCVTExpRounder'></span>
                    <span className='jalowCVTExpLine'></span>
                  </div>

                  <div className='jalowCVTExpData'>
                    <h3 className='jalowCVTExpTitle'>Master OF design</h3>
                    <span className='jalowCVTExpCompany'>From 2013 to 2015 | Tech Soft</span>
                    <p className="jalowCVTExpDescription">Masterminding Software engineering between computer programs and apps. We build extensive systems that control networks or apps that accomplish tasks. The skillset varies from position to position</p>
                  </div>
                </div>
              </div>
            </section>

            <section className='jallowCVTEduSection' data-aos="fade-left">
              <h2 className="jallowCVTSectionTitle">Education</h2>

              <div className='jalowCVTEduContainer'>
                <div className='jalowCVTEduContent'>
                  <div className='jalowCVTEduTime'>
                    <span className='jalowCVTEduRounder'></span>
                    <span className='jalowCVTEduLine'></span>
                  </div>

                  <div className='jalowCVTEduData'>
                    <h3 className='jalowCVTEduTitle'>SHA Institution Studies</h3>
                    <span className='jalowCVTEduCompany'>2019 - 2021</span>
                    <p className="jalowCVTEduDescription">Full Stack web developer at (SHA) Institution Studies. Study the most advance tech languages on how to built dynamic websites using React, Angular, Jquery, Nodejs Javascript, HTML and CSS.</p>
                  </div>
                </div>

                <div className='jalowCVTEduContent'>
                  <div className='jalowCVTEduTime'>
                    <span className='jalowCVTEduRounder'></span>
                    <span className='jalowCVTEduLine'></span>
                  </div>

                  <div className='jalowCVTEduData'>
                    <h3 className='jalowCVTEduTitle'>SAE Athens Institution</h3>
                    <span className='jalowCVTEduCompany'>2016 - 2019</span>
                    <p className="jalowCVTEduDescription">Specialize in the art of designing and creating games for computers, video game consoles, tablets and smartphones, aiming at a unique user experience. Concentrating on game planning, math and physics, but also on problem-solving skills.</p>
                  </div>
                </div>

                <div className='jalowCVTEduContent'>
                  <div className='jalowCVTEduTime'>
                    <span className='jalowCVTEduRounder'></span>
                    <span className='jalowCVTEduLine'></span>
                  </div>

                  <div className='jalowCVTEduData'>
                    <h3 className='jalowCVTEduTitle'>london Institution</h3>
                    <span className='jalowCVTEduCompany'>2010 - 2015</span>
                    <p className="jalowCVTEduDescription">
                      IT Fundaamentals for Business Professional Programming.<br />
                      Computer Science Essentials for Software Development.<br/>
                      Indroduction to Programming in C++.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* <!--========== INTERESTS ==========--> */}
            <section className='jallowCVTCliSection' data-aos="fade-right">
              <h2 className="jallowCVTSectionTitle">Client</h2>

              <div className='jallowCVTCliContainer'>
                <div className='jallowCVTCliContent'>
                <i class="fab fa-instalod jallowCVTClliIcon"></i>
                  <span className='jallowCVTCliName'>Instalod</span>
                </div>
                <div className='jallowCVTCliContent'>
                <i class="fab fa-wizards-of-the-coast jallowCVTClliIcon"></i>
                  <span className='jallowCVTCliName'>Wizards</span>
                </div>
                <div className='jallowCVTCliContent'>
                <i class="fab fa-bitcoin jallowCVTClliIcon"></i>
                  <span className='jallowCVTCliName'>Bitcoin</span>
                </div>
                <div className='jallowCVTCliContent'> 
                <i class="fab fa-aws jallowCVTClliIcon"></i>
                  <span className='jallowCVTCliName'>A W S</span>
                </div>
                <div className='jallowCVTCliContent'>
                <i class="fab fa-buy-n-large jallowCVTClliIcon"></i>
                  <span className='jallowCVTCliName'>Buy & Loan</span>
                </div>
              </div>
            </section>

            {/* <!--========== SKILLS ==========--> */}
            <section className='jallowCVTSkillSection jallowCVTSkills' data-aos="fade-left">
              <h2 className="jallowCVTSectionTitle jallowCVTSkillsTitle">skills</h2>

              <div className='jallowCVTSkillContent'>
                <ul className='jallowCVTSkillData'>
                  <li className='jallowCVTSkillName'>
                    <span className='jallowCVTSkillCircle'>HTML & CSS - Proficient</span>
                  </li>
                  <li className='jallowCVTSkillName'>
                    <span className='jallowCVTSkillCircle'>Javascript - Advance</span>
                  </li>
                  <li className='jallowCVTSkillName'>
                    <span className='jallowCVTSkillCircle'>React - Advance</span>
                  </li>
                  <li className='jallowCVTSkillName'>
                    <span className='jallowCVTSkillCircle'>Power Point - Proficient</span>
                  </li>
                </ul>

                <ul className='jallowCVTSkillData'>
                  <li className='jallowCVTSkillName'>
                    <span className='jallowCVTSkillCircle'>Adobe - Proficient</span>
                  </li>
                  <li className='jallowCVTSkillName'>
                    <span className='jallowCVTSkillCircle'>English Proficient</span>
                  </li>
                  <li className='jallowCVTSkillName'>
                    <span className='jallowCVTSkillCircle'>French - Advance</span>
                  </li>
                  <li className='jallowCVTSkillName'>
                    <span className='jallowCVTSkillCircle'>Greek - Intermediate</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className='jallowCVTExpertSection' data-aos="fade-right">
              <h2 className="jallowCVTSectionTitle">Expertise</h2>

              <div className='jallowCVTExpertContent'>
                <div className='jallowCVTExpertDiv'>
                  <h4 className='jallowCVTExpertTitle'>SOFTWARE TESTING</h4>
                  <p className='jallowCVTExpertDescription'>In software testing, specialists oversee the quality assurance stage of software development and deployment. By maintain this we conducting manual tests to determine product fitness.</p>
                </div>

                <div className='jallowCVTExpertDiv'>
                  <h4 className='jallowCVTExpertTitle'>Human Resources</h4>
                  <p className='jallowCVTExpertDescription'>Strategic approach to the effective in recruiting, training, management and developing of employees in a company or organization such that they help their business gain a competitive advantage.</p>
                </div>

                <div className='jallowCVTExpertDiv'>
                  <h4 className='jallowCVTExpertTitle'>Business Consultant</h4>
                  <p className='jallowCVTExpertDescription'>Assisting  Business solving numerous problem with emergence of the new technologies and how to operate efficiently on the ever changing market enviroment.<br />Consultants provide their expertise to help business and  clients through the proposed changes.</p>
                </div>
              </div>
            </section>

            <section className='jallowCVTContactSection  ProfSectionJallow' data-aos="fade-left">
            <h2 className="jallowCVTSectionTitle">Contact Me</h2>

              <div className='jallowCVTContactFolder'>
                <div className='jallowCVTContactContent'>
                  <form className='jallowCVTContactForm'>
                    <label>First Name</label>
                    <input type='text' name="firstName"/>
                    <label>Last Name</label>
                    <input type='text' name="lastName"/>
                    <label>Email</label>
                    <input type='email' name="email"/>
                    <label>Type your message here</label>
                    <textarea></textarea>
                    <button className='jallowCVTContactFormBtn'>Submit</button>
                  </form>
                </div>
                <div className='jallowCVTContactInformation'>
                  <h2 className='jallowCVTContactName'>Rachel Smith</h2>
                  <p className='jallowCVTContactTitle'>LAWYER & CONSULTANT</p>

                  <ul className='jallowCVTContactInfor'>
                    <li className='jallowCVTContactList'><strong>Phone:</strong>
                      <span>999 555 6666</span>
                    </li>
                    <li className='jallowCVTContactList'><strong>Email:</strong>
                      <span>info@email.com</span>
                    </li>
                  </ul>

                  <hr className='jallowCVTHR'/>

                  <div className='jallowCVTSocialBottom'>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </section>
            <a href="#" class="storeCopyright">&copy; {new Date().getFullYear()} Rachel Smith INC | All right reserved | Terms of Service | Privacy</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CVTemplateJallow2;
