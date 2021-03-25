import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import "../../../../../../css/CVYusufTemplate3An.css";

const Wrapper = styled.div`
  .navButtons {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    margin-bottom:4px; 
    color:red; 
  }
  
`;

class NavBar extends Component {
  navHome = () => {
    const { history } = this.props;
    history.push("/templateY3");
  };
  navAbout = () => {
    const { history } = this.props;
    history.push("/about");
  };

  navExperience = () => {
    const { history } = this.props;
    history.push("/experience");
  };

  navContact = () => {
    const { history } = this.props;
    history.push("/contact");
  };

  render() {
    return (
      <Wrapper>
        <div className="navButtons">
           
          <ul className="main-nav__link" onClick={this.navHome} >HOME</ul>
          <ul className="main-nav__item" onClick={this.navAbout} >ABOUT</ul>
          <ul className="main-nav__item" onClick={this.navExperience} >EXPERIENCE</ul>
          <ul className="main-nav__item" onClick={this.navContact} >CONTACT</ul>
      
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(NavBar);
