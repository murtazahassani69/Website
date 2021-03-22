import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import codepen from "./imgs/codepen.png";
import github from "./imgs/github.png";
import linkedin from "./imgs/linkedin.png";
import "../../../../../css/CVMurtazaTemplate.css";
import MurtazaTampReview from "./MurtazaTampReview";

function Home_Cv() {
  return (
    <div>
      <Background />
      <About />
      <Education />
      <Experiences />
      <SkillsSection />
      <Forms />
      <SecondFooter />
    </div>
  );
}

function Background() {
  return (
    <div className="CVMurtazaTemp_background">
      <div className="CVMurtazaTemp_top_container">
        <h1>
          Hello, I'm Murtaza Hassani.
          <br />
          I'm a Full Stack Web Developer.
        </h1>

        <button className="CVMurtazaTemp_work_button " data-wow-offset="0">
          <a href="#CVMurtazaTemp_about_section_id">View my work</a>
        </button>
        <br />

        <button className="btn_download">
          <a href="/MurtazaTampReview">See an example</a>
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div
      id="CVMurtazaTemp_about_section_id"
      className="CVMurtazaTemp_about_section"
    >
      <section className="CVMurtazaTemp_into_about_section_pa">
        <img
          className="CVMurtazaTemp_about_section_img"
          src="https://webstockreview.net/images/clipart-boy-nose-18.png"
          alt="My pic"
        />
        <h2>Murtaza Hassani</h2>
        <p className="CVMurtazaTemp_about_section_p">
          Software Engineer who loves to transform ideas into reality using
          code. I am passionate about using Javascript and Animation Libraries
          to create awesome user experiences. With over two years of experience
          developing web applications using the latest front-end and back-end
          technologies. Motivated designer and developer with experience
          creating custom websites with ReactJs, JavaScript, HTML5, and CSS3.
          Strong collaboration skills and proven history of application
          development. Wordpress and MySQL.
        </p>
        <div></div>
      </section>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="CVMurtazaTemp_skills_section">
      <h1 className="CVMurtazaTemp_skills_section_h1">
        <h1>My skills</h1>
      </h1>
      <div className="CVMurtazaTemp_skills_">
        <span className="CVMurtazaTemp_skills_span">HTML</span>
        <ProgressBar className="CVMurtazaTemp_progress_bar" completed={100} />

        <span className="CVMurtazaTemp_skills_span">JAVASCRIPT</span>
        <ProgressBar className="CVMurtazaTemp_progress_bar" completed={45} />

        <span className="CVMurtazaTemp_skills_span">CSS</span>
        <ProgressBar className="CVMurtazaTemp_progress_bar" completed={80} />

        <span className="CVMurtazaTemp_skills_span">REACTJS</span>
        <ProgressBar className="CVMurtazaTemp_progress_bar" completed={40} />

        <span className="CVMurtazaTemp_skills_span">NODE.JS</span>
        <ProgressBar className="CVMurtazaTemp_progress_bar" completed={57} />

        <span className="CVMurtazaTemp_skills_span">ANGULAR</span>
        <ProgressBar className="CVMurtazaTemp_progress_bar" completed={87} />
      </div>
    </div>
  );
}

// Education section
function Education() {
  return (
    <div className="CVMurtazaTemp_education_intro_section">
      <h1 className="CVMurtazaTemp_education_title">Education</h1>
      <div className="CVMurtazaTemp_education">
        <ul className="CVMurtazaTemp_education_ul">
          <h3 className="CVMurtazaTemp_education_h3">
            Master's degree - Computer Vision
          </h3>
          <li className="CVMurtazaTemp_education_li">
            Riga Technical University September, 2008 - May, 2012
          </li>
          <li className="CVMurtazaTemp_education_li">
            Studies included understanding of different computer vision
            algorithms and their implementation in practice. Subjects also
            included 3D modeling and projection theory.
          </li>
        </ul>

        <ul className="CVMurtazaTemp_education_ul">
          <h3 className="CVMurtazaTemp_education_h3">
            Barchelor's Degree - Computer Science{" "}
          </h3>
          <li className="CVMurtazaTemp_education_li">
            Riga Technical University September, 2010 - May, 2015{" "}
          </li>
          <li className="CVMurtazaTemp_education_li">
            Studies included fundamental computer science subjects such as
            software & hardware architecture and development. Also an emphasis
            on automation techniques.
          </li>
        </ul>

        <ul className="CVMurtazaTemp_education_ul">
          <h3 className="CVMurtazaTemp_education_h3">
            Barchelor's Degree - Computer Science{" "}
          </h3>
          <li className="CVMurtazaTemp_education_li">
            Riga Technical University September, 2012 - Oct, 2018{" "}
          </li>
          <li className="CVMurtazaTemp_education_li">
            Studies included fundamental computer science subjects such as
            software & hardware architecture and development. Also an emphasis
            on automation techniques.
          </li>
        </ul>
      </div>
    </div>
  );
}

// Experiences  section

function Experiences() {
  return (
    <div className="CVMurtazaTemp_experience_intro_section">
      <h1 className="CVMurtazaTemp_experience_title">Experience</h1>
      <div className="CVMurtazaTemp_experience">
        <ul className="CVMurtazaTemp_experience_ul">
          <h3 className="CVMurtazaTemp_experience_h3">ALTEN Canada</h3>
          <li className="CVMurtazaTemp_experience_li">
            Riga Technical University Montréal, Canada | April, 2019 - Current
          </li>
          <li className="CVMurtazaTemp_experience_li">
            Full stack web development for investment banking services with
            emphasis on React.js, Angular, .NET Core based solutions using Test
            Driven Development methodology.
            <br />
            <a href="">Let's see what i have done.</a>
          </li>
        </ul>

        <ul className="CVMurtazaTemp_experience_ul">
          <h3 className="CVMurtazaTemp_experience_h3">
            Barchelor's Degree - Computer Science{" "}
          </h3>
          <li className="CVMurtazaTemp_experience_li">
            Riga Technical University September, 2010 - May, 2015{" "}
          </li>
          <li className="CVMurtazaTemp_experience_li">
            Studies included fundamental computer science subjects such as
            software & hardware architecture and development. Also an emphasis
            on automation techniques.
            <br />
            <a href="">More</a>
          </li>
        </ul>

        <ul className="CVMurtazaTemp_experience_ul">
          <h3 className="CVMurtazaTemp_experience_h3">
            Ubiquiti Networks Ltd.
          </h3>
          <li className="CVMurtazaTemp_experience_li">
            Riga Technical University September, 2012 - Oct, 2018{" "}
          </li>
          <li className="CVMurtazaTemp_experience_li">
            Studies included fundamental computer science subjects such as
            software & hardware architecture and development. Also an emphasis
            on automation techniques.
            <br />
            <a href="">More</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Forms
function Forms() {
  return (
    <div id="RestaurantBookTable" className="CVMurtazaTemp_form_section">
      <div className="CVMurtazaTemp_contact_section"></div>
      <div className="CVMurtazaTemp_form_section_container">
        <div>
          <div className="CVMurtazaTemp_form_center">
            <h3 className="CVMurtazaTemp_form_h3"> Contact me </h3>
            <div className="form_">
              <p className="CVMurtazaTemp_form_p"> Your Name</p>
              <input
                type="text"
                placeholder="your name"
                className="res_input"
                name="last_name"
              />
              <p className="CVMurtazaTemp_form_p">Your Email</p>
              <input
                type="email"
                placeholder="your email"
                className="res_input"
                name="email"
              />
              <div className="CVMurtazaTemp_form_submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// footer section
function Footer() {
  return (
    <>
      <div class="Murtaza_Tamp_footer">
        <div class="Murtaza_Tamp_footer_inner_div">
          <div
            id="Murtaza_Tamp_footer_box_div"
            class="Murtaza_Tamp_footer_boxes_div"
          >
            <h1>
              <span>Contact</span> Info
            </h1>
            <p>
              {" "}
              <span>
                <i class="fas fa-phone"></i>&nbsp;+306947323829
              </span>
              <br></br>
              <span>
                <i class="fas fa-at"></i>&nbsp;johnsmith@gmail.com
              </span>
            </p>
          </div>
          <div
            id="Murtaza_Tamp_footer_boxs_12"
            class="Murtaza_Tamp_footer_boxes_div"
          >
            <div class="Murtaza_Tamp_footer_social_links">
              <br></br>
              <a href="#" class="Murtaza_Tamp_social_icons">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="Murtaza_Tamp_social_icons">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="Murtaza_Tamp_social_icons">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="Murtaza_Tamp_social_icons">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            
          </div>

        </div>
      </div>
    </>
  );
}
function SecondFooter() {
  return (
    <div className="Second_Murtaza_Footer_Container">
      <div className="blocks">
      <div
      id="Murtaza_Tamp_footer_box_div"
      class="Murtaza_Tamp_footer_boxes_div"
    >
      <h1>
        <span>Contact</span> Info
      </h1>
      <p>
        {" "}
        <span>
          <i class="fas fa-phone"></i>&nbsp;+306947323829
        </span>
        <br></br>
        <span>
          <i class="fas fa-at"></i>&nbsp;johnsmith@gmail.com
        </span>
      </p>
    </div>

      </div>
      <div className="Murtaza_Tamp_footer_social_links">
      <br></br>
      <a href="#" class="Murtaza_Tamp_social_icons">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="#" class="Murtaza_Tamp_social_icons">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="#" class="Murtaza_Tamp_social_icons">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="Murtaza_Tamp_social_icons">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
    </div>
  );
}

export default Home_Cv;
