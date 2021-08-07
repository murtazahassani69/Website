import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deviceSize } from "./Assets/responsive";
import EksiNousLogo from "../../imgs/logo_NoFrame.svg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";
import "../../css/AdminLogin.css";
export default function AdminLogin() {
  return (
    <div className="admin_login_section">
      <AdminMenu />
      <h1 className="admin_login_h1">Admin Only</h1>
      <form className="admin_login_form">
        <img
          className="admin_login_security"
          src="https://img.icons8.com/wired/64/fa314a/grand-master-key.png"
          alt="security"
        />
        <div className="admin_login_inputs">
          <div className="">
            <input type="text" placeholder="user name" label="user name" />
          </div>
          <div className="">
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <button type="button" class="btn btn-lg btn-primary" disabled>
          Primary button
        </button>
      </form>
    </div>
  );
}

const AdminNav = styled.nav`
  display: flex;
  position: sticky;
  height: 80px;
  // align-items: center;
  justify-content: center;
  top: 0;
  background: #ffffff;
  margin-top: -80px;
  z-index: 10;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    transition: 0.8s all ease;
  }
`;

const AdminNavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 1;
`;

const AdminNavLogo = styled(Link)`
    display: flex;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    justify-self: flex-start;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    margin-left: 24px;

    img {
        width: 50px;
        height: 50px;
        border-radius 29%;
    }
`;

const AdminNavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
`;

const AdminNavItem = styled.div`
  display: flex;
`;

// const AdminNavLinks = styled(Link)`
const AdminNavLinks = styled.a`
  color: black;
  font-size: 1rem;
  text-decoration: none;
  height: 100%;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    border-bottom: 3px solid #2a9d8f;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #2a9d8f;
    border-bottom: 3px solid #fff;
    padding-bottom: 2px;
  }
`;

// const AdminBtnLink =styled(Link)`
const FlagInAdmin = styled.div`
  display: flex;
`;

const FlagInAdminUl = styled.ul`
  font-size: 22px;
  display: -webkit-inline-box;
`;

const FlagInAdminLi = styled.li`
  margin: 3px;
`;

// implementation languages
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

function AdminMenu() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("appTitle");
  }, [currentLanguage, t]);

  return (
    <>
      <AdminNav>
        <AdminNavContainer>
          <AdminNavLogo to="/">
            {/* Eksi-Nous */}
            <img src={EksiNousLogo} alt="logo" />
          </AdminNavLogo>
          <AdminNavMenu>
            <AdminNavItem>
              <AdminNavLinks href="/">Home</AdminNavLinks>
            </AdminNavItem>
            <FlagInAdmin>
              <FlagInAdminUl>
                {languages.map(({ code, country_code }) => (
                  <FlagInAdminLi key={country_code}>
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
                        className={`flag-icon flag-icon-${country_code} mx-4`}
                        style={{
                          opacity: currentLanguageCode === code ? 0.7 : 1,
                        }}
                      ></span>
                    </a>
                  </FlagInAdminLi>
                ))}
              </FlagInAdminUl>
            </FlagInAdmin>
          </AdminNavMenu>
        </AdminNavContainer>
      </AdminNav>
    </>
  );
}
