import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* //// Curtain Down  //// */
   @media only screen and (max-width: 56.25em) {
    .button_slide {
      background-color: none;
      border: 1px none;
      padding: 13.5px 27px;
      display: inline-block;
      font-family: "Lucida Console", Monaco, monospace;
      color: #e84545;
      font-size: 14px;
      letter-spacing: 1px;
      cursor: pointer;
      box-shadow: inset 0 0 0 0 #f17a3a;
      -webkit-transition: ease-out 0.4s;
      -moz-transition: ease-out 0.4s;
      transition: ease-out 0.4s;
    }
  }
  @media only screen and (min-width: 56.25em) {
    .button_slide {
      background-color: none;
      border: 1px none;
      padding: 13.5px 27px;
      display: inline-block;
      font-family: "Lucida Console", Monaco, monospace;
      color: #e84545;
      font-size: 18px;
      letter-spacing: 1px;
      cursor: pointer;
      box-shadow: inset 0 0 0 0 #f17a3a;
      -webkit-transition: ease-out 0.4s;
      -moz-transition: ease-out 0.4s;
      transition: ease-out 0.4s;
    }
  }

  .slide_down:hover {
    box-shadow: inset 0 100px 0 0 #f17a3a;
    color: #1a1a1d;
  }
  <p className="button_slide slide_down" onClick={this.props.onClick}>
          {this.props.children}
        </p>
        
  .main-nav__item {
    position: relative;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
    list-style: none;
  }

  .main-nav__item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 51%;
    width: 0;
    background-color: #f17a3a;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  .main-nav__item::after {
    content: "";
    position: absolute;
    top: 49%;
    left: 100%;
    height: 51%;
    width: 0;
    background-color: #f17a3a;
    transform: scaleY(0);
    transform-origin: top right;
    transition: transform 0.2s, left 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.1s;
  }

  .main-nav__link:link,
  .main-nav__link:visited {
    color: #e84545;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 0.1rem 1.5rem;
    z-index: 10;
    position: relative;
    display: flex;
    align-content: center;
    transition: all 0.6s;
    animation: fadeIn 1s ease-out;
  }

  .main-nav__item:hover::before,
  .main-nav__item--active::before {
    transform-origin: top;
    transform: scaleY(1);
    width: 100%;
  }

  .main-nav__item:hover::after,
  .main-nav__item--active::after {
    transform-origin: bottom right;
    transform: scaleY(1);
    left: 0%;
    width: 100%;
  }

  .main-nav__link:hover {
    color: #1a1a2f;
  }
`;

class NavButton extends Component {
  render() {
    return (
      <Wrapper>
        <li className="main-nav__item">
          <a
            className="main-nav__link"
            href={this.props.children.toLowerCase()}
          >
            {this.props.children}
          </a>
        </li>
      </Wrapper>
    );
  }
}

export default NavButton;
