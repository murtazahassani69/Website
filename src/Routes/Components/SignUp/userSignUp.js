import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
} from "reactstrap";
import "../../css/UserSignUp.css";

import ModelPopup from "./ModelPopup";

// languages import
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

// Language implementation
const languages = [
  {
    code: "en",
    country_code: "gb",
  },
  {
    code: "gr",
    country_code: "gr",
  },
];
const UserSignUp = (props) => {
  const initialInputState = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
    dateOfBird: "",
    country: "",
    language: "",
    profession: "",
    lookingJobAt: "",
  };
  const [userData, setUserData] = useState(initialInputState);
  const {
    name,
    lastName,
    email,
    password,
    password2,
    gender,
    dateOfBird,
    country,
    language,
    profession,
    lookingJobAt,
  } = userData;
  const history = useHistory();
  const [pop, setPop] = useState({
    showPopup: false,
    text: "register",
    ext: "ext",
  });

  // language implementation
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    if (password !== password2) {
      setPop({ text: "Ooppps ! Your password doesn`t match" });
    } else {
      setPop({ showPopup: true, text: "Ooppps ! Your password doesn`t match" });
      if ((name.length >= 3) & (password.length >= 3) & (email.length >= 3)) {
        console.log("Register SUCCESS now you can Login");
      }
    }
  };

  // language implementation
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("appTitle");
  }, [currentLanguage, t]);

  return (
    <div className="temp-div-signUp-container">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="temp-div-signUp-mx-4-card">
              <CardBody className="p-4">
                <Form id="temp-div-signUp-form">
                  <div className="mb-2 pageheading">
                    <div
                      className="col-sm-12 btn btn-primary"
                      onClick={() => {
                        window.location.href = "/templates";
                      }}
                    >
                      <i class="fas fa-arrow-circle-left"></i>&nbsp;
                      {t("signUpGoBack")}
                    </div>
                    <div className="dropdown_menu_sign_up">
                      {languages.map(({ code, country_code }) => (
                        <span
                          key={country_code}
                          className="dropdown_menu_sign_up_li"
                        >
                          <a
                            href="#!"
                            className={classNames("dropdown-item", {
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
                  </div>
                  <InputGroup className=" temp-div-signUp-mb-3">
                    <Input
                      className="tempForm-signup-input"
                      type="text"
                      onChange={handleChange}
                      name="name"
                      value={name}
                      placeholder="First Name"
                    ></Input>
                  </InputGroup>
                  <InputGroup className="temp-div-signUp-mb-3">
                    <Input
                      className="tempForm-signup-input"
                      type="text"
                      onChange={handleChange}
                      name="lastName"
                      value={lastName}
                      placeholder="Last Name"
                    ></Input>
                  </InputGroup>
                  <InputGroup className=" temp-div-signUp-mb-3">
                    <Input
                      className="tempForm-signup-input"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="email"
                    ></Input>
                  </InputGroup>
                  <InputGroup className="temp-div-signUp-mb-3">
                    <Input
                      className="tempForm-signup-input"
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      placeholder="password"
                    ></Input>
                  </InputGroup>
                  <InputGroup className="temp-div-signUp-mb-3">
                    <Input
                      className="tempForm-signup-input"
                      type="password"
                      name="password2"
                      value={password2}
                      onChange={handleChange}
                      placeholder="confirm password"
                    ></Input>
                  </InputGroup>
                  <InputGroup className="temp-div-signUp-mb-3">
                    <label for="gender">Male </label>
                    <Input
                      className="tempForm-signup-inputRadio"
                      type="radio"
                      onChange={(e) =>
                        e.target.checked ? { gender: "Male" } : ""
                      }
                      name="gender"
                      value={gender}
                      placeholder="gender"
                    ></Input>
                    <label for="gender">Female </label>
                    <Input
                      className="tempForm-signup-inputRadio"
                      type="radio"
                      onChange={(e) =>
                        e.target.checked ? { gender: "Male" } : ""
                      }
                      name="gender"
                      value={gender}
                      placeholder="gender"
                    ></Input>
                  </InputGroup>
                  <InputGroup className="temp-div-signUp-mb-3">
                    <label for="dateOfBird">Birthday </label>
                    <Input
                      className="tempForm-signup-input"
                      type="date"
                      onChange={handleChange}
                      name="dateOfBird"
                      value={dateOfBird}
                      placeholder="date Of Bird"
                    ></Input>
                  </InputGroup>
                  <InputGroup>
                    <select
                      id="country"
                      name="country"
                      className="temp-div-signUp-mb-4"
                      onChange={handleChange}
                    >
                      <option value={country}>---Country---</option>
                      <option value="Greece">Greece</option>
                      <option value="UK">UK</option>
                      <option value="USA">USA</option>
                    </select>
                  </InputGroup>
                  <InputGroup className="temp-div-signUp-mb-3">
                    <Input
                      className="tempForm-signup-input"
                      type="text"
                      onChange={handleChange}
                      name="language"
                      value={language}
                      placeholder="language"
                    ></Input>
                  </InputGroup>
                  <InputGroup className="temp-div-signUp-mb-3">
                    <Input
                      className="tempForm-signup-input"
                      type="text"
                      onChange={handleChange}
                      name="profession"
                      value={profession}
                      placeholder="profession"
                    ></Input>
                  </InputGroup>
                  <InputGroup className="temp-div-signUp-mb-3">
                    <Input
                      className="tempForm-signup-input"
                      type="text"
                      onChange={handleChange}
                      name="lookingJobAt"
                      value={lookingJobAt}
                      placeholder="looking Job At"
                    ></Input>
                  </InputGroup>
                  <Button onClick={addUser} id="temp-form-submit-btn" block>
                    Create Account
                  </Button>
                  {pop.showPopup ? (
                    <ModelPopup text={pop.text} ext={pop.ext} />
                  ) : null}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default UserSignUp;
