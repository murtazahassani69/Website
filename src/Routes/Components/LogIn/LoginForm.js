import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css';
import footer_img from '../../imgs/logo_NoFrame.jpg';

// languages import
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';

// Language implementation
const languages = [
  {
    code: 'en',
    country_code: 'gb',
  },
  {
    code: 'gr',
    country_code: 'gr',
  },
];

const LoginForm = () => {
  // language implementation
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  // language implementation
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('appTitle');
  }, [currentLanguage, t]);

  return (
    <div className='login-wrapper'>
      <form className='login-form'>
        <div className='dropdown_menu_sign_in'>
          {languages.map(({ code, country_code }) => (
            <span key={country_code} className='dropdown_menu_sign_in_li'>
              <a
                href='#!'
                className={classNames('dropdown-itema', {
                  disabled: currentLanguageCode === code,
                })}
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
              >
                <span
                  className={`flag-icon flag-icon-${country_code} mx-2`}
                  style={{
                    opacity: currentLanguageCode === code ? 0.7 : 1,
                  }}
                ></span>
              </a>
            </span>
          ))}
        </div>
        <a href='#'>
          <img id='footer-logo' src={footer_img} alt='logo' className='login-logo'></img>
        </a>
        <div className='login-tittle'>Login</div>

        <div className='main-login'>
          <label className='login-label'>
            <input className='login-input' name='name' placeholder='Email or username'></input>
          </label>
          <label className='login-label'>
            <input className='login-input' name='password' placeholder='Password'></input>
          </label>
          <div className='login-div-password'>
            <div className='login-forgot'>
              <Link className='login-link' to='/'>
                Forgot Password?
              </Link>
            </div>
            <div className='login-div-remember'>
              <input type='checkbox' id='remember_me' name='_remember_me' />
              <label for='remember_me' class='login-remember'>
                Remember me
              </label>
            </div>
          </div>
        </div>
        <button className='login-btn' type='submit'>
          Log in
        </button>

        <div className='login-div'>
          <span>Not registered? </span>
          <Link className='login-link' to='/signUp'>
            Create an account!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
