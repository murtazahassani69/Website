import React from 'react';
import "../../../../css/CVJallowTemplate2.css";


function CVTemplateJallow2() {
  return (
    <>
      <div className='jallowCVTMain'>
        <div className='jallowCVTContainerMain'>
          <div className='jallowCVTResume'>
            <nav className='jallowCVTNavContainer'>
              <div className='jallowCVTNavDiv'>
                <a href='#home' className='jallowCVTNavLogo'>Rachel Smith</a>
                </div>
                <div className='jallowCVTNavMenu'>
                  <ul className='jallowCVTNavList'>
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
              {/* </div> */}
              <div>
                <input type='checkbox' id='check' />
                <label htmlFor='check' className='jallowCVTCheckIcon'>&#9776;</label>
              </div>   
            </nav>

            <section className='jallowCVTProfSection ProfSectionJallow'>
              <div className='jallowCVTProfContent'>
                <div className='jallowCVTProfImg'>
                  <img src='https://pinotmasters.sk/wp-content/uploads/2014/10/speaker-2-v2.jpg' alt='Profile' width='250px' />
                </div>
                <div className='jallowCVTProfInformation'>
                  <h1 className='jallowCVTProfName'>Rachel Smith</h1>
                  <p className='jallowCVTProfTitle'>LAWYER & CONSULTANT</p>

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
              <div className='jallowCVTSectionProfile'>
                <h2 className='jallowCVTSectionTitle'>Profile</h2>
                <p className='jallowCVTProfileDescription'>
                Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </p>
              </div>
            </section>

            {/* <!--========== EXPERIENCE ==========--> */}
            <section className='jallowCVTExpSection'>
              <h2 className="jallowCVTSectionTitle">Experience</h2>

              <div className='jalowCVTExpContainer'>
                <div className='jalowCVTExpContent'>
                  <div className='jalowCVTExpTime'>
                    <span className='jalowCVTExpRounder'></span>
                    <span className='jalowCVTExpLine'></span>
                  </div>

                  <div className='jalowCVTExpData'>
                    <h3 className='jalowCVTExpTitle'>MOBILE APPLICATION DEVELOPER</h3>
                    <span className='jalowCVTExpCompany'>From 2019 to 2021 | App Tech</span>
                    <p className="jalowCVTExpDescription">Simple feedback and engagement tools for teams that want to build and ship winning products. Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</p>
                  </div>
                </div>

                <div className='jalowCVTExpContent'>
                  <div className='jalowCVTExpTime'>
                    <span className='jalowCVTExpRounder'></span>
                    <span className='jalowCVTExpLine'></span>
                  </div>

                  <div className='jalowCVTExpData'>
                    <h3 className='jalowCVTExpTitle'>UI / UX DESIGN AREA</h3>
                    <span className='jalowCVTExpCompany'>From 2017 to 2019 | Adobe Inc</span>
                    <p className="jalowCVTExpDescription">For meeting the expectation of leading the team to work the specified taxts in the labour field</p>
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
                    <p className="jalowCVTExpDescription">Mastermining Software engineering between computer programs and apps. We build extensive systems that control networks or apps that accomplish tasks. The skillset varies from position to position</p>
                  </div>
                </div>
              </div>
            </section>

            <section className='jallowCVTEduSection'>
              <h2 className="jallowCVTSectionTitle">Education</h2>

              <div className='jalowCVTEduContainer'>
                <div className='jalowCVTEduContent'>
                  <div className='jalowCVTEduTime'>
                    <span className='jalowCVTEduRounder'></span>
                    <span className='jalowCVTEduLine'></span>
                  </div>

                  <div className='jalowCVTEduData'>
                    <h3 className='jalowCVTEduTitle'>Institution Studies</h3>
                    <span className='jalowCVTEduCompany'>2019 - 2021</span>
                    <p className="jalowCVTEduDescription">Simple feedback and engagement tools for teams that want to build and ship winning products. Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</p>
                  </div>
                </div>

                <div className='jalowCVTEduContent'>
                  <div className='jalowCVTEduTime'>
                    <span className='jalowCVTEduRounder'></span>
                    <span className='jalowCVTEduLine'></span>
                  </div>

                  <div className='jalowCVTEduData'>
                    <h3 className='jalowCVTEduTitle'>London University</h3>
                    <span className='jalowCVTEduCompany'>2016 - 2019</span>
                    <p className="jalowCVTEduDescription">Mastermining Software engineering between computer programs and apps. We build extensive systems that control networks or apps that accomplish tasks. The skillset varies from position to position</p>
                  </div>
                </div>

                <div className='jalowCVTEduContent'>
                  <div className='jalowCVTEduTime'>
                    <span className='jalowCVTEduRounder'></span>
                    <span className='jalowCVTEduLine'></span>
                  </div>

                  <div className='jalowCVTEduData'>
                    <h3 className='jalowCVTEduTitle'>High School</h3>
                    <span className='jalowCVTEduCompany'>2010 - 2015</span>
                    <p className="jalowCVTEduDescription">Simple feedback and engagement tools for teams that want to build and ship winning products. Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* <!--========== INTERESTS ==========--> */}
            <section className='jallowCVTCliSection'>
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
                <i class="fas fa-hamburger jallowCVTClliIcon"></i>
                  <span className='jallowCVTCliName'>McDonald’s</span>
                </div>
                <div className='jallowCVTCliContent'>
                <i class="fas fa-pizza-slice jallowCVTClliIcon"></i>
                  <span className='jallowCVTCliName'>Pizza Hot</span>
                </div>
                <div className='jallowCVTCliContent'>
                <i class="fas fa-biohazard jallowCVTClliIcon"></i>
                  <span className='jallowCVTCliName'>Biohazard</span>
                </div>
              </div>
            </section>

            {/* <!--========== SKILLS ==========--> */}
            <section className='jallowCVTSkillSection jallowCVTSkills'>
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
                    <span className='jallowCVTSkillCircle'>Frence - Advance</span>
                  </li>
                  <li className='jallowCVTSkillName'>
                    <span className='jallowCVTSkillCircle'>Greek - Intermediate</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className='jallowCVTExpertSection'>
              <h2 className="jallowCVTSectionTitle">Expertise</h2>

              <div className='jallowCVTExpertContent'>
                <div className='jallowCVTExpertDiv'>
                  <h4 className='jallowCVTExpertTitle'>SOFTWARE TESTING</h4>
                  <p className='jallowCVTExpertDescription'>In software testing, specialists oversee the quality assurance stage of software development and deployment. They maintain this by conducting manual tests to determine product fitness.</p>
                </div>

                <div className='jallowCVTExpertDiv'>
                  <h4 className='jallowCVTExpertTitle'>SOFTWARE ENGINEER</h4>
                  <p className='jallowCVTExpertDescription'>An excellent software testing resume emphasizes troubleshooting talents. Since teams will rely on your skills to troubleshoot and diagnose, you need to make it clear that you excel in this aspect of the position.</p>
                </div>

                <div className='jallowCVTExpertDiv'>
                  <h4 className='jallowCVTExpertTitle'>I'M A TITLE</h4>
                  <p className='jallowCVTExpertDescription'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
              </div>
            </section>

            <section className='jallowCVTContactSection  ProfSectionJallow'>
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
