import React, { Component } from "react";
 
import styled from "styled-components";
import Header from "./header";


const Wrapper = styled.div`
  .contact_page {
    opacity: 0;
    animation: fadeIn 1s forwards 0s;
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact__email {
    width: 40%;
    animation: fadeIn 1s;
    @media only screen and (max-width: 80.5em),
      screen and (max-height: 56.25em) {
      width: 60%;
    }
    @media only screen and (max-width: 37.5em) {
      width: 100%;
    }
  }

  .form__group:not(:last-child) {
    margin-top: 2rem;
  }

  .form__input {
    position: relative;
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    border-radius: 2px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #e84545;
    width: 100%;
    display: block;
    transition: all 0.3s;
  }

  .form__input::after {
    position: absolute;
    content: "";
    top: 0;
    left: -1rem;
    height: 100%;
    width: 10%;
    background-color: orangered;
  }

  ::selection {
    background-color: #f7f7f7;
    color: #1a1a1d;
  }

  button,
  input {
    overflow: visible;
  }

  input:required {
    box-shadow: none;
  }

  .form__input:placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  .form__label {
    font-size: 1.2rem;
    font-weight: 300;
    color: #999;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }

  label {
    cursor: default;
  }

  .form__input--textarea {
    resize: vertical;
    overflow: hidden;
    box-shadow: none;
  }

  .btn,
  .btn:link,
  .btn:visited {
    background-color: transparent;
    padding: 1rem 3rem;
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.6rem;
    color: #ff3153;
    font-weight: 200;
    letter-spacing: 0.2rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s ease-out;
  }

  .btn:active,
  .btn:focus {
    outline: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  .btn:hover:enabled {
    box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.2);
    color: #e84545;
  }
  .btn:hover:enabled::before {
    height: 80%;
    border-top: none;
    border-bottom: none;
    border-left: 0.2rem solid #e84545;
  }
  .btn:hover:enabled::after {
    transform: scale(1);
    background: none;
    opacity: 1;
    border: 1px solid #e84545;
    animation: removeBorder 1s forwards;
  }
  .btn:disabled {
    color: rgba(255, 49, 83, 0.6);
  }

  .btn::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    transition: all 0.2s ease-out;
    border-left: 0.5rem solid #ff3153;
  }

  .btn::after {
    content: "";
    opacity: 0;
    background-color: #e84545;
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.2s ease-out;
  }

  .contact__social {
    flex-grow: 1;
   
    display: flex;
    animation: fadeIn 1s 0.5s;
    animation-fill-mode: backwards;
    @media only screen and (max-width: 37.5em) {
      flex-direction:column;
    }
  }

  .btn-group {
    cursor: pointer;
  }

  a {
    color: #e84545;
  }

  a {
    background-color: transparent;
  }

  .btn-group:nth-child(odd) .btn-group__icon-box {
    transform: skew(-15deg) rotate(-15deg);
  }
  .btn-group:nth-child(even) .btn-group__icon-box {
    transform: skew(15deg) rotate(15deg);
  }
  .btn-group__icon-box {
    border: 1px solid transparent;
    padding: 2rem;
  }

  .btn-group__icon-box > svg {
    height: 3.5rem;
    width: 3.5rem;
    fill: rgba(232, 69, 69, 0.7);
  }

  .btn-group__icon-box:hover {
    box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.2);
  }

  .btn-group__icon-box:hover:after {
    transform: scale(1);
    background: none;
    opacity: 1;
    border: 1px solid #e84545;
    animation: removeBorder 1s forwards;
  }

  .btn-group__icon-box:after {
    content: "";
    opacity: 0;
    background-color: #e84545;
    position: absolute;
    bottom: 10%;
    left: 0%;
    width: 96%;
    height: 90%;
    z-index: -1;
    transition: all 0.2s ease-out;
  }

  .phone-number {
    font-size: large;
    text-align: center;
    margin: auto;
  }
  @media only screen and (max-width: 450px) {
    .contact_social{
      flex-direction: column;
    }
  }
`;

class contact extends Component {
  state = {
    email: "",
    subject: "",
    message: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    const { email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "p@gmail.com",
      subject: subject,
      message_html: message,
    };

    this.resetForm();
  }

  resetForm() {
    this.setState({
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <Wrapper>
        <div className="contact_page">
          <Header />
          <div tabIndex="-1" role="group" style={{ outline: "none" }}>
            <section className="contact">
              <div className="contact__email">
                <form onSubmit={this.handleSubmit.bind(this)} className="form">
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      name="subject"
                      placeholder="Email"
                      id="subject"
                      required=""
                      value={this.state.email}
                      onChange={this.handleChange.bind(this, "email")}
                    />
                    <label htmlFor="yourmail" className="form__label">
                      Your Email
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      name="subject"
                      placeholder="Subject"
                      id="subject"
                      required=""
                      value={this.state.subject}
                      onChange={this.handleChange.bind(this, "subject")}
                    />
                    <label htmlFor="subject" className="form__label">
                      Email Subject
                    </label>
                  </div>

                  <div className="form__group">
                    <textarea
                      className="form__input form__input--textarea"
                      name="body"
                      placeholder="Body"
                      id="body"
                      required=""
                      spellCheck="false"
                      value={this.state.message}
                      onChange={this.handleChange.bind(this, "message")}
                    ></textarea>
                    <label htmlFor="body" className="form__label">
                      Email Body
                    </label>
                  </div>
                  <div className="form__group">
                    <button className="btn ">Send</button>
                  </div>
                </form>
              </div>
              <div className="contact__social">
                <h3 className="phone-number">
                  Location : Stanford Ct Mechanicsburg, PA
                  <br />
                  Phone : +1 (720) 299 9999‬
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/in"
                  className="btn-group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn-group__icon-box">
                    <svg id="icon-linkedin" viewBox="0 0 24 28">
                      <title>linkedin</title>
                      <path d="M5.453 9.766v15.484h-5.156v-15.484h5.156zM5.781 4.984c0.016 1.484-1.109 2.672-2.906 2.672v0h-0.031c-1.734 0-2.844-1.188-2.844-2.672 0-1.516 1.156-2.672 2.906-2.672 1.766 0 2.859 1.156 2.875 2.672zM24 16.375v8.875h-5.141v-8.281c0-2.078-0.75-3.5-2.609-3.5-1.422 0-2.266 0.953-2.641 1.875-0.125 0.344-0.172 0.797-0.172 1.266v8.641h-5.141c0.063-14.031 0-15.484 0-15.484h5.141v2.25h-0.031c0.672-1.062 1.891-2.609 4.672-2.609 3.391 0 5.922 2.219 5.922 6.969z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://github.com/"
                  className="btn-group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn-group__icon-box">
                    <svg id="icon-github" viewBox="0 0 24 28">
                      <title>github</title>
                      <path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com"
                  className="btn-group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn-group__icon-box">
                    <svg id="icon-facebook" viewBox="0 0 24 28">
                      <title>facebook</title>
                      {/* <path d="M5.453 9.766v15.484h-5.156v-15.484h5.156zM5.781 4.984c0.016 1.484-1.109 2.672-2.906 2.672v0h-0.031c-1.734 0-2.844-1.188-2.844-2.672 0-1.516 1.156-2.672 2.906-2.672 1.766 0 2.859 1.156 2.875 2.672zM24 16.375v8.875h-5.141v-8.281c0-2.078-0.75-3.5-2.609-3.5-1.422 0-2.266 0.953-2.641 1.875-0.125 0.344-0.172 0.797-0.172 1.266v8.641h-5.141c0.063-14.031 0-15.484 0-15.484h5.141v2.25h-0.031c0.672-1.062 1.891-2.609 4.672-2.609 3.391 0 5.922 2.219 5.922 6.969z"></path> */}
                     
							<path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
						</svg>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default contact;
