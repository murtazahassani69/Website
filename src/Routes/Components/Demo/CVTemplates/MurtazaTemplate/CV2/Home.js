import React, { useEffect } from "react";
import { FaBars,FaArrowDown } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { services, projects } from "./Data";
import Typist from 'react-typist';
import { ImArrowLeft2 } from "react-icons/im";


// languages import
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

// Language implementation
const languages = [
  {
    code: "en",
    country_code: "gb",
  },  
{
    code: "gr",
    country_code: "gr",
  }
];
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
    // language implementation
    const currentLanguageCode = cookies.get("i18next") || "en";
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    const { t } = useTranslation();
  
    // language implementation
    useEffect(() => {
      document.body.dir = currentLanguage.dir || "ltr";
      document.title = t("appTitle");
    }, [currentLanguage, t]);
  
  return (
    <div>
      <main>
        <button
          onClick={openSidebar}
          className="Second_MurtazaCV_Temp_sidebar_toggle"
        >
          <FaBars />
        </button>

        <section className="Second_MurtazaCV_Temp_home_section">
        <div className="Second_CV_Murtaza_Temp_go_back_div">
        {" "}
        <ul className="murtaza_cv_animation">
        {languages.map(({ code, country_code }) => (
          <li key={country_code} className="murtaza_cv_animation_li">
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
        <a href="/templates">
          <h2 className="Second_CV_Murtaza_Temp_go_back_icon">
            <ImArrowLeft2 />{" "}
          </h2>
        </a>
      </div>
      
          <div className="Second_home_intro">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiw7r4q5i9NAP8F0G9XUhUOkratFhncgHTQ&usqp=CAU"
              className="Second_MurtazaCV_Temp_intro_img"
            />
            <Typist className="second_murtaza_temp_typist">
              <h1 className="Second_MurtazaCV_Temp_section_h2">
                Welcome I am <span>"Boyd Danvers"</span>{" "}
              </h1>
              <h2>And I'm a Graphics Developer</h2>
            </Typist>
            <a href="#second_murtaza_temp_id">
              <FaArrowDown className="Second_MurtazaCV_Temp_next_icon" />
            </a>
            <article
              id="second_murtaza_temp_id"
              className=" Second_MurtazaCV_Temp_intro_article"
            >
              <p className="Second_MurtazaCV_Temp_intro_p">
                <h3 className=" Second_MurtazaCV_Temp_intro_h3">ABOUT ME</h3>
                Boyd Danvers loves programming, writing, speaking,
                traveling, and lifting heavy things. He does not love talking
                about himself in the 3rd person. He is the co-founder of
                Gruntwork, a company that provides DevOps as a Service. He's
                also the author of two books published by O'Reilly Media: Hello,
                Startup and Terraform: Up & Running. Previously, he spent more
                than a decade building infrastructure and products that served
                hundreds of millions of users while working as a software
                engineer at LinkedIn, TripAdvisor, Cisco Systems, and Thomson
                Financial. For more info, check out his writing, speaking,
                projects, and photos.
              </p>
            </article>
          </div>
        </section>
      </main>
      <VideoPlayer_Section />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

const Title = () => {
  return (
    <div className="Second_MurtazaCV_Temp_section_title">
      <h2>Services</h2>
      <div className="Second_MurtazaCV_Temp_section_underline"></div>
    </div>
  );
};


const Services = () => {
  return (
    <section className="section bg-grey">
      <Title />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="Second_MurtazaCV_Temp_section_underline"></div>
              <p className="second_section_center_p">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

const Project_Title = () => {
  return (
    <div className="Second_MurtazaCV_Temp_section_title">
      <h2>Projects</h2>
      <div className="Second_MurtazaCV_Temp_section_underline"></div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="Second_MurtazaCV_Temp_section_one bg-grey">
      <Project_Title />
      <div className="section-center Second_MurtazaCV_Temp_project_center">
        {projects.map((project) => {
          const { id, icon, title, text } = project;
          return (
            <article key={id} className="project">
              {icon}
              <h4>{title}</h4>
              <div className="Second_MurtazaCV_Temp_section_underline"></div>
              <p className="second_section_center_p">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
const VideoPlayer_Section = () => {
  return (
    <section className="Mur_video_play_section">
      <article className="Mur_video_play_section_video">
        <iframe
        
          src="https://www.youtube.com/embed/Op7sI9ETays"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h4>
          {" "}
          <a href="https://youtu.be/Op7sI9ETays">
            Watch Video for more information
          </a>{" "}
        </h4>
        <div className="Second_MurtazaCV_Temp_section_underline"></div>
      </article>
    </section>
  );
};

function Footer() {
  return (
    <div className="Second_MurtazaCV_Temp_footer_">
      <p>© 2021 Murtaza Hassani All rights reserved. Built Amnick Team</p>
    </div>
  );
}

export default Home;
