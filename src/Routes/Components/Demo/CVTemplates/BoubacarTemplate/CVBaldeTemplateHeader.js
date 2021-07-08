import React,  {useEffect} from "react";
import {Link} from 'react-router-dom';
import '../../../../css/CVBaldeTemplateHeader.css';

// languages import
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

function Header() {
    return (
          <div className="CVBaldeTemp-div-header">
              <Menu />
              <Section />
          </div>
    );
}

function Section(){
    const { t } = useTranslation();

    return(
        <section className="CVBaldeTemp-section">
            <div className="CVBaldeTemp-div-section">
                <h1>{t("CV_BALDE_TAMP_HEADER")}
                
                </h1>
                <p>
                {t("CV_BALDE_TAMP_TITLE")}
                </p>
                <img src="https://mattfarley.ca/img/mf-avatar.svg" alt="Image" id="CVBaldeTemp-img-section" />
            </div>
            <img src="https://mattfarley.ca/img/hero.svg" alt="Image" id="CVBaldeTemp-img2-section" />
        </section>
    )
}

// Language implementation
const languages = [
  {
    code: "gr",
    country_code: "gr",
  },
  {
    code: "en",
    country_code: "gb",
  },
  ];
function Menu() {
          // language implementation
          const currentLanguageCode = cookies.get("i18next") || "en";
          const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
          const { t } = useTranslation();
        
              // language implementation
          useEffect(() => {
            document.body.dir = currentLanguage.dir || "ltr";
            document.title = t("app_title");
          }, [currentLanguage, t]);
        
    return (
      <div className="CVBaldeTemp-div-menu">
        <img
          src="https://mattfarley.ca/img/mf-logo.svg"
          alt="Logo"
          className="CVBaldeTemp-div-logo"
        />
        <nav className="CVBaldeTemp-div-toggle">
          <input type="checkbox" id="CVBaldeTemp-check" />
          <label htmlFor="CVBaldeTemp-check" className="checkbtn">
            &#9776;
          </label>
          <ul className="CVBaldeTemp-div-menu-right">
            <li className="CVBaldeTemp-div-menu-right-text">Mentorship</li>
            <li className="CVBaldeTemp-div-menu-right-button">Say Hello</li>
            <a href={`/templateB1Pdf`}>
              <li className="CVBaldeTemp-div-menu-right-text">Pdf</li>
            </a>

            <li className="CVBaldeTemp-div-menu-flag">
              <ul className="CVBaldeTemp_div_ul">
                {languages.map(({ code, country_code }) => (
                  <li key={country_code}  className="CVBaldeTemp_div_ul_li"> 
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
            </li>

            <a href="/templates">
              <li className="CVBaldeTemp-div-menu-right-text">Back</li>
            </a>
          </ul>
        </nav>
      </div>
    );
}


export default Header;
