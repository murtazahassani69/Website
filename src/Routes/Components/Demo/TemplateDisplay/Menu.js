import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_img from "../../../imgs/footer_logo.png";
import logo_6 from "../../../imgs/new.png";
import { LanguageContext } from "../../Home/containers/Language";
import { languageOptions } from "../../Home/languages";

const Nav = styled.nav`
  min-height: 9vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 45px;
  width: 45px;
  margin-left: 50px;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  width: inherit;
  justify-content: center;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarLinks = styled.li`
  padding: 0 3% 0 3%;
`;

const StyledLink = styled.a`
  color: #171819;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  background-image: linear-gradient(rgb(211, 199, 199), rgb(211, 199, 199));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
  :hover {
    cursor: pointer;
    background-size: 100% 3px;
  }
`;

const NavIcon = styled.button`
  background: rgb(211, 199, 199);
  cursor: pointer;
  border: none;
  outline: none;
  margin-right: 1%;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background: white;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${({ toggle }) => (toggle ? "70%" : "40%")};
  }
`;

const Overlay = styled.div`
  height: ${({ toggle }) => (toggle ? "0" : "100vh")};
  position: fixed;
  display: flex;
  width: 36vw;
  right: 0;
  top: 9vh;
  background: #fff;
  box-shadow: ${({ toggle }) => (toggle ? "0" : "8px 0px 5px 9px grey")};
  transition: height 0.4s linear;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  width: inherit;
  left: 50%;
  top: 45%;
  display: ${({ toggle }) => (toggle ? "none" : "")};
  transform: translate(-50%, -50%);

  li {
    opacity: ${({ toggle }) => (toggle ? 0 : 1)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

function Menu() {
  const [toggle, setToggle] = useState(false);
  
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);
  // const onClick = e => {
  //   e.preventDefault();
  //   setToggle(!false);
  // };

  return (
    <>
      <Nav>
        <a href="/">
          <Logo src={logo_img} alt="logo" />
        </a>
        <img
        src={logo_6}
        alt="eskinous logo"
        className="menu__navbar_logo1"
      />
        <Navbar>
          <NavbarLinks>
            <StyledLink href="/">Home</StyledLink>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink href="#FirstServicesId">Services</StyledLink>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink href="#PortfolioId">Portfolio</StyledLink>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink href="#TemplatesFooterId">About us</StyledLink>
          </NavbarLinks>
          <div className="dropdown_flag">
          <select
            className="dropdown-content_flag"
            onChange={handleLanguageChange}
            value={userLanguage}
          >
            {Object.entries(languageOptions).map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        </Navbar>
        <NavIcon onClick={() => setToggle(!toggle)}>
          <Line toggle={!toggle} />
          <Line toggle={!toggle} />
          <Line toggle={!toggle} />
        </NavIcon>
      </Nav>
      <Overlay toggle={!toggle}>
        <OverlayMenu toggle={!toggle}>
          <NavbarLinks>
            <StyledLink to="/">Home</StyledLink>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink to="">About us</StyledLink>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink to="">Services</StyledLink>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink to="/restaurant">Our Work</StyledLink>
          </NavbarLinks>
        </OverlayMenu>
      </Overlay>
    </>
  );
}
export default Menu;
