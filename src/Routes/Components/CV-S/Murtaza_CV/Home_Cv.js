import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import codepen from "./img/codepen.png";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import "../../../css/CVMurtazaTemplate.css";

function Home_Cv() {
  return (
    <div>
      <Background />
      <About />
      <SkillsSection />
      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div className="background">
      <div className="top-container">
        <h1>
          Hello, I'm Murtaza Hassani.
          <br />
          I'm a Full Stack Web Developer.
        </h1>
        <button className="work-button " data-wow-offset="0">
          <a href="#about_section_id">View my work</a>
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about_section_id" className="about_section">
      <section className="into_about_section_pa">
        <img
          className="about_section_img"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="My pic"
        />
        <h2>Murtaza Hassani</h2>
        <p className="about_section_p">
          Software Engineer who loves to transform ideas into reality using
          code. I am passionate about using Javascript and Animation Libraries
          to create awesome user experiences. With over two years of experience
          developing web applications using the latest front-end and back-end
          technologies. Motivated designer and developer with experience
          creating custom websites with ReactJs, JavaScript, HTML5, and CSS3.
          Strong collaboration skills and proven history of application
          development. Wordpress and MySQL.
        </p>
      </section>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="skills_section">
      <h1 className="skills_section_h1">
        <h1>My skills</h1>
      </h1>
      <div className="skills_">
        <span className="skills_span">HTML</span>
        <ProgressBar className="progress_bar" completed={100} />

        <span className="skills_span">JAVASCRIPT</span>
        <ProgressBar className="progress_bar" completed={45} />

        <span className="skills_span">CSS</span>
        <ProgressBar className="progress_bar" completed={80} />

        <span className="skills_span">REACTJS</span>
        <ProgressBar className="progress_bar" completed={40} />

        <span className="skills_span">NODE.JS</span>
        <ProgressBar className="progress_bar" completed={57} />

        <span className="skills_span">ANGULAR</span>
        <ProgressBar className="progress_bar" completed={87} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div id="footer" className="container-fluid text-center py-5">
      <div className="container1">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 mx-auto">
            <a
              href="https://codepen.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-fluid" src={codepen} alt="" />
            </a>
            <a
              className="px-3"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-fluid" src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/frankizquierdo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-fluid" src={linkedin} alt="" />
            </a>
          </div>
        </div>
        <h5 className="pt-4">Murtaza Hassani &copy; 2018</h5>
      </div>
    </div>
  );
}

export default Home_Cv;
