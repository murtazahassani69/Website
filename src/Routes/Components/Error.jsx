import React from "react";
import "../css/Error.css";
const Error = () => {
  return (
    <div className="error-div-container">
      <div className="error-div-error">
        <p className="p">4</p>
        <span className="error-span-dracula">
          <div className="error-div-con">
            <div className="error-div-hair"></div>
            <div className="error-div-hair-r"></div>
            <div className="error-div-head"></div>
            <div className="error-div-eye"></div>
            <div className="error-div-eye error-div-eye-r"></div>
            <div className="error-div-mouth"></div>
            <div className="error-div-blod"></div>
            <div className="error-div-blod error-div-blod2"></div>
          </div>
        </span>
        <p className="p">4</p>
        <div className="error-div-page-ms">
          <p className="error-div-page-msg">
            {" "}
            Oops, the page you're looking for Disappeared{" "}
          </p>
          <button className="error-button-go-back">
            <a href="/">Go Back</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
