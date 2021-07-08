import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css'
import footer_img from '../../imgs/logo_NoFrame.jpg';


const LoginForm = () => {
    return (
        <div className="login-wrapper">
            <form className="login-form">
                <a href="#" ><img id="footer-logo" src={footer_img} alt="logo" className="login-logo" ></img></a>
                <div className="login-tittle">Welcome Back</div>
                <label  className="login-label">
                    <input className="login-input" name="name" placeholder="Email or username"></input>
                </label>
                <label className="login-label">
                     <input className="login-input" name="password" placeholder="Password"></input>
                </label>
                <div className="login-div-password">
                    <div className="login-div-remember">
                        <input type="checkbox" id="remember_me" name="_remember_me" />
                        <label for="remember_me" class="login-remember">Remember me</label>
                    </div>
                    <div className="login-forgot">
                       <Link className="login-link" to="/">Forgot Password?</Link>
                    </div>
                </div>
                <button className="login-btn" type="submit">Log in</button>
                <div class="login-separator"></div>
                <div className="login-div">
                    <span>Don't have an account?</span>
                    <Link className="login-link" to="/">Create One!</Link>
                </div>
          </form>
        </div>
     );
}
 
export default LoginForm;