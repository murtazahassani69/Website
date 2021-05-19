import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css';

const LoginForm = () => {
    return (
        <div className="login-wrapper">
            <form className="login-form">
            <div className="login-tittle">Sign In</div>
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
            <div className="login-div">
                <span>No account?</span>
                <Link to="/">Create One!</Link>
            </div>
            <button className="login-btn" type="submit">Log in</button>

            </form>
        </div>
     );
}
 
export default LoginForm;