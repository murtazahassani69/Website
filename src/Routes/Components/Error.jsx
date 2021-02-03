import React from "react";
import "../css/Error.css";
const Error = () => {
  return (
    <div className="container">
      <div className="error">
        <p className="p">4</p>
        <span className="dracula">
          <div className="con">
            <div className="hair"></div>
            <div className="hair-r"></div>
            <div className="head"></div>
            <div className="eye"></div>
            <div className="eye eye-r"></div>
            <div className="mouth"></div>
            <div className="blod"></div>
            <div className="blod blod2"></div>
          </div>
        </span>
        <p className="p">4</p>
        <div className="page-ms">
          <p className="page-msg">
            {" "}
            Oops, the page you're looking for has Disappeared{" "}
          </p>
          <button className="go-back">
            <a href="/">Go Back</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
