import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./HomeCnenter.css";
import Button from '@material-ui/core/Button';


export default function HomeCnenter() {

  return (
    <div className="homecenter">
      <div>
        <div styles="border-radius: 0px" className="img_center">
        <div className="tit_welcome">
        <h1>
        Welcome to
        
        Amnick!
        </h1>
        <br />
        <h4>
        We are a combination of City <br />
        Leaders/Mayors from around the world.
        </h4>
        <div>
        <p>
        Whatever your life’s goals, <br /> our financial professionals can help
        design a strategy tailored to your specific needs. 
        <br />
        </p>
        </div>
            <button className="button1">
Explore</button>
      </div>
        </div>  
        <br />
        <br />
        <br />
        <br />

      </div>
    </div>
  );
}
