import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css'

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
const LoginForm = () => {
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
        <div className="login-wrapper">
        
            <form className="login-form">
            <div className="language-select">
                <div className="dropdown">
                  <ul
                    className="dropdown-menu-sign-up"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {languages.map(({ code, country_code }) => (
                      <li key={country_code}>
                        <a
                          href="#"
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
              </div>
                <div className="login-tittle">Login</div>
                <fieldset className="login-field">
                    <label  className="login-label">
                        <input className="login-input" name="name" placeholder="Email or username"></input>
                    </label>
                </fieldset>
                <fieldset className="login-field">
                    <label className="login-label">
                        <input className="login-input" name="password" placeholder="Password"></input>
                    </label>
                </fieldset>
                <button className="login-btn" type="submit">Log in</button>
                <div className="login-div">
                    <span>No account?   </span>
                    <Link className="login-link" to="/signUp">Create One!</Link>
                </div>
          </form>
        </div>
     );
}
 
export default LoginForm;