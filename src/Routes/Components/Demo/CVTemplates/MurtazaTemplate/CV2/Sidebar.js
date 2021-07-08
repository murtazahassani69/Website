import React, { useEffect } from "react";
import logo from "./imgs/transparent_logo.png";
import { useGlobalContext } from "./Context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./Data";

// languages import
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

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
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
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
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
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
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
