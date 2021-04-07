import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import bkvideo from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/assets/sky.mp4";
import Home from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/home";
import About from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/about";
import Experience from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/experience";
import Contact from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/contact";
import "../css/CVYusufTemplate3An.css";

export default function TempYu3An() {
  let { path } = useRouteMatch();
    return (
      <div className="tempY3">
        <div className="TempYu3An-bg-video">
          <video className="TempYu3An-bg-video_content" autoPlay loop>
            <source src={bkvideo} type="video/mp4"/>
          </video>
          <div className="Xbg-video__overlay"></div>
        </div>
      <Router exact path={path}>
        <Switch>
          <Route path={`/templateY3`} component={Home} />
          <Route path={`/about`} component={About} />
          <Route path={`/experience`} component={Experience} />
          <Route path={`/contact`} exact component={Contact} />
        </Switch>
      </Router>
    </div>
    );
  }

 