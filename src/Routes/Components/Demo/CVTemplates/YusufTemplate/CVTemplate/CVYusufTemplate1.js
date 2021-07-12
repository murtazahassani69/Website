import React, {useState, useEffect} from "react";
import "../../../../../css/CVYusufTemplate1.css";
import Pdf from "react-to-pdf";
 
import face from "./imgs/face.jpg";
 
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

const ref = React.createRef();

function CVYusufTemplate1 (){
   const [toggle, setToggle] = useState(false);

   /*=====================+
 |LANGUAGES TRANSLATION|
 +=====================*/
 const languages = [
  {
    code: "en",
    country_code: "gb",
   },
   {
     code: "gr",
     country_code: "gr",
   },
];

 const currentLanguageCode = cookies.get("i18next") || "en";
 const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
 const { t } = useTranslation();

 useEffect(() => {
   document.body.dir = currentLanguage.dir || "ltr";
   document.title = t("app_title");
 }, [currentLanguage, t]);

    return(
    <>
      <header className={toggle ?'CVYusufTemp-nav-open':null}id="CVYusufTemp-div-menu-header">

      {/* <div className="CVYusufTemp1-div-menu-logo-container">
        <img id="header-img" . src="logo.png" alt="logo"">
        <h4 className=" CVYusufTemp1-div-menu-logo">Logo Name</h4>
      </div> */}

      <button className="CVYusufTemp-nav-toggle" onClick={()=>setToggle(!toggle)} aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>

      <nav id="CVYusufTemp-div-nav-bar">
        <ul className="CVYusufTemp-div-menu-nav-links">
          <li><a className="CVYusufTemp-div-menu-nav-link" href="/">Home</a></li>
          <li><a className="CVYusufTemp-div-menu-nav-link" href="/templates">Back to Template</a></li>
          <li><Pdf targetRef={ref} filename="resume.pdf"paperSize="A4" margin="2cm">
            {({ toPdf }) => <a className="CVYusufTemp-div-menu-nav-link" onClick={toPdf}href="#section">Download PDF</a>} 
            </Pdf></li>
            <div className="dropdown">
              <ul
                className="cv_u_s_template_ul"
                aria-labelledby="dropdownMenuButton"
              >
                {languages.map(({ code, name, country_code }) => (
                  <li key={country_code}                 className="cv_u_s_template_li"                  >
                    <a
                      href="#!"
                      className={classNames("dropdown-item", {
                        disabled: currentLanguageCode === code,
                      })}
                      onClick={() => {
                        i18next.changeLanguage(code);
                      }}
                    >
                      <span
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                        style={{
                          opacity: currentLanguageCode === code ? 0.7 : 1,
                        }}
                      ></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </ul>
      </nav>
   </header>
     
    <div id="CVYusufTemp1-div-main-container">
    <div className="CVYusufTemp1-div-page" id="toPrint" ref={ref}>
      <header className="CVYusufTemp1-div-header">
        <div className="CVYusufTemp1-div-header-name">
          <h1 className="name">Joey Karate</h1>
          <h3 className="major">Full Stack Developer</h3>
        </div>
        <div className="CVYusufTemp1-div-header-photo" >
          <img src={face} alt='Profile Picture' />                  
        </div>
      </header>
      <section className="CVYusufTemp1-div-contents">
        <section className="CVYusufTemp1-div-main-section">
          <section className="CVYusufTemp1-div-highlights">
            {t("YUSUF_TAMP_ABOUT")}

          </section>
          <section className="experience">
            <div className="CVYusufTemp1-div-section-title">Experience</div>
            <div className="CVYusufTemp1-div-experience-card">
              <div className="title">Senior Developer</div>
              <div className="company">
                <span className="name">Amnick Social Enterprise</span>
                <span className="duration"> Oct 2016 - Nov 2020</span>
              </div>
              <div>
                <ul className='experience-list'>
                  <li>Strong organizational and project management skills. Proficiency with fundamental front end languages such as HTML, CSS and JavaScript. Familiarity with JavaScript frameworks such as Angular JS, React and Amber.</li>
                  <li>Project management skill</li>
                </ul>
              </div>
            </div>
            <div className="CVYusufTemp1-div-experience-card">
              <div className="title">Frontend Developer</div>
              <div className="company">
                <span className="name">BDA company</span>
                <span className="duration">Oct 2013 - Nov 2016</span>
              </div>
              <div>
                <ul className='experience-list'>
                <li>I studied on web page app.</li>
                  <li>I am good at dynamic page.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="certificates">
            <div className="CVYusufTemp1-div-section-title">Certificates</div>
            <div className="certificate-card">
              <div className="title">Full Stack Development</div>
              <div className="date">Nov 2019</div>
            </div>
            <div className="CVYusufTemp1-div-certificate-card">
              <div className="title">Fundamental of JavaScript</div>
              <div className="date">Nov 2016</div>
            </div>
          </section>
          <section className="education">
            <div className="CVYusufTemp1-div-section-title">Education</div>
            <div className="CVYusufTemp1-div-education-card">
              <div className="title">Degree in Computer Science.   </div>
              <div className="institution">Institution</div>
              <div className="date">2006 - 2013</div>
            </div>
          </section>
        </section>
        <section className="CVYusufTemp1-div-right-section">
          <section className="personal-info">
            <div className="CVYusufTemp1-div-section-title">Personal Info</div>
            <div className="CVYusufTemp1-div-info-item">
              <strong>Strong organizational and project management skills</strong>
              <span className="info">Proficiency with fundamental front end languages such as HTML, CSS and JavaScript.</span>
              <span className="info">Familiarity with JavaScript frameworks such as Angular JS, React and Amber.</span>
            </div>
            <div className="CVYusufTemp1-div-info-item">
              <strong>Communication</strong>
              <span className="info">Teamwork</span>
            </div>
            <div className="CVYusufTemp1-div-info-item">
              <strong>Leadership</strong>
              <span className="info">Ability to work under pressure.</span>
            </div>
          </section>
          <section className="skills">
            <div className="CVYusufTemp1-div-section-title">Skills</div>
            <div className="CVYusufTemp1-div-skill-card">
              <span>backend</span>
              <div className="CVYusufTemp1-div-skill-level-container">
                <div className="CVYusufTemp1-div-disc fill"></div>
                <div className="CVYusufTemp1-div-disc fill"></div>
                <div className="CVYusufTemp1-div-disc"></div>
                <div className="CVYusufTemp1-div-disc"></div>
                <div className="CVYusufTemp1-div-disc"></div>
              </div>
            </div>
            <div className="CVYusufTemp1-div-skill-card">
              <span>frontend</span>
              <div className="CVYusufTemp1-div-skill-level-container">
                  <div className="CVYusufTemp1-div-disc fill"></div>
                  <div className="CVYusufTemp1-div-disc fill"></div>
                  <div className="CVYusufTemp1-div-disc fill"></div>
                  <div className="CVYusufTemp1-div-disc">
                  <div className="CVYusufTemp1-div-half-disc-left"></div>
                </div>
                <div className="CVYusufTemp1-div-disc">
                  <div className="CVYusufTemp1-div-disc concentric-half"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  </div>
</>
  )
}
export default CVYusufTemplate1;