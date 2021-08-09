import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container,
  Form, Input, InputGroup, Row } from 'reactstrap';
// languages import
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

import '../../css/UserSignUp.css';
import moment from 'moment';
import ModelPopup from './ModelPopup';
const axios = require('axios').default;
const baseUrl = 'http://localhost:8080';

// Language implementation
const languagesGREN = [
  {
    code: "en",
    country_code: "gb",
  },
  {
    code: "gr",
    country_code: "gr",
  },
];

const UserSignUp = () => {
  const initialInputState = {creationDate:'', firstName: '',lastName: '', email: '', password:'', password2:'',
    dateOfBirth: '1000-01-01', lookingJobAt:'', userTypeId:1, languageId:'', professionId:'', countryId:'',  genderId:'',cityId:'0'}
     
  const [userData, setUserData] = useState(initialInputState)
  const { creationDate, firstName, lastName, email, password, password2, dateOfBirth, lookingJobAt, userTypeId, languageId, professionId, cityId, genderId } = userData
  const history = useHistory()
  const [pop, setPop] = useState({
    showPopup: false,
    text:'register',
    ext:'ext'
  })
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [professions, setProfessions] = useState([]);
  // language state
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languagesGREN.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
 
  const fetchCountries = async() => {
    try{
      setCountries(await (await axios.get(baseUrl+'/countries')).data);
    } catch(error){
      console.log(`${error}`);
    }
  }
  const fetchCities = async(ctId) => {
    try{
      setCities(await (await axios.get(baseUrl+'/cities/byCountry/'+ctId)).data);
    } catch(error){
      console.log(`${error}`);
    }
  }
  const fetchLanguages = async() => {
    try{
      setLanguages(await (await axios.get(baseUrl+'/languages')).data);
    } catch(error){
      console.log(`${error}`);
    }
  }
  const fetchProfessions = async() => {
    try{
      setProfessions(await (await axios.get(baseUrl+'/professions')).data);
    } catch(error){
      console.log(`${error}`);
    }
  }
  const postUser = async(userData) => {
    try{
       await (await axios.post(baseUrl+'/users',userData)).data;
    } catch(error){
      console.log(`${error}`);
    }
  }

  useEffect(() => {
    fetchCountries();
    fetchLanguages();
    fetchProfessions();
   // language implementation here
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("appTitle");
    }, []);
 

  const handleChange= ( e ) => {
    e.preventDefault()
    setUserData({ ...userData, [e.target.name]:e.target.value })
  }

  const handleChangeCountry= ( e ) => {
    e.preventDefault()
    setUserData({ ...userData, countryId:e.target.value })
    const ctId = e.target.value;
    if(ctId>0)fetchCities(ctId);
    timeStamp();
  }

  const timeStamp = () => {  
    let now = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    setUserData({...userData,creationDate:now});
  }

  const addUser = () => {  
    if(password!==password2){
      setPop({
        showPopup: !pop.showPopup,
        text:'ooppps ! Your password doesn`t match'
      })
        
    }else{ 
      if (firstName.length>=3&lastName.length>=3&email.length>=3&password.length>=3 
        &lookingJobAt.length>=3&languageId.length>=1&professionId.length>=1&genderId.length>=1){ 
          postUser(userData);
          console.log('Register SUCCESS')
          setPop({showPopup: !pop.showPopup,text:"registration is succesfull"})
          setTimeout(() => {
            window.location.reload(); 
          }, 600); 
        }  else{setPop({showPopup: !pop.showPopup,text:"please fill all fields"})}     
    }
  }

  return(
    <div className="temp-div-signUp-container" >
      <Container>
        <Row className='justify-content-center'>
          <Col md='9' lg='7' xl='6'>
            <Card className='temp-div-signUp-mx-4-card'>
              <CardBody className='p-4'>
                <Form id="temp-div-signUp-form">
                  <div className="mb-2 pageheading">
                    <div className='col-sm-12 btn btn-primary' onClick={() => {window.location.href="/templates"}}>
                      <i className="fas fa-arrow-circle-left"></i>&nbsp;   {t("signUpGoBack")}
                    </div>
                    {/* flag start */ }
                    <div className="dropdown_menu_sign_up">
                      {languagesGREN.map(({ code, country_code }) => (
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
                    {/* /** * flag end */ }
     
                  </div>
                  <InputGroup className=' temp-div-signUp-mb-3'>
                    <Input
                      className="tempForm-signup-input"
                      type='text'
                      onChange={handleChange}
                      name='firstName'
                      value={firstName}
                      placeholder='First Name' ></Input><span>&#42;</span>
                  </InputGroup>
                  <InputGroup className='temp-div-signUp-mb-3'>
                    <Input
                      className="tempForm-signup-input"
                      type='text'
                      onChange={handleChange}
                      name='lastName'
                      value={lastName}
                      placeholder='Last Name' ></Input>&#42;
                  </InputGroup>
                  <InputGroup className=' temp-div-signUp-mb-3'>
                    <Input
                      className="tempForm-signup-input"
                      type='text'
                      name = 'email'
                      value = {email}
                      onChange={handleChange}
                      placeholder='email'></Input>&#42;
                  </InputGroup>
                  <InputGroup className='temp-div-signUp-mb-3'>
                    <Input
                      className="tempForm-signup-input"
                      type='password'
                      name = 'password'
                      value = {password}
                      onChange={handleChange}
                      placeholder='password'></Input>&#42;
                  </InputGroup>
                  <InputGroup className='temp-div-signUp-mb-3'>
                    <Input
                      className="tempForm-signup-input"
                      type='password'
                      name = 'password2'
                      value = {password2}
                      onChange={handleChange}
                      placeholder='confirm password'></Input>&#42;
                  </InputGroup>
               
                  <InputGroup className='temp-div-signUp-mb-3'>
                    <label for="Male">M </label>
                    <Input
                      className="tempForm-signup-inputRadio"
                      type='radio'
                      name='genderId'
                      onChange={e =>e.target.checked ? (userData.genderId='1'):null}
                    ></Input>
                      <label for="Female">FM </label>
                    <Input
                      className="tempForm-signup-inputRadio"
                      type='radio' 
                      name='genderId'
                      onChange={e =>e.target.checked ? (userData.genderId='2'):null}
                    ></Input> 
                    <label for="Other">Not S </label>
                    <Input
                      className="tempForm-signup-inputRadio"
                      type='radio' 
                      name='genderId'
                      onChange={e =>e.target.checked ? (userData.genderId='3'):null}
                    ></Input> &#42;
                  </InputGroup>
                  <InputGroup className='temp-div-signUp-mb-3'>
                    <label for="dateOfBirth">Birthday </label>
                    <Input
                      className="tempForm-signup-input"
                      type='date'
                      onChange={handleChange}
                      name='dateOfBirth'
                 
                    ></Input>
                  </InputGroup>
                  <InputGroup >
                
                      <select id="countryId" name="countryId" 
                        className='temp-div-signUp-mb-4' onChange={handleChangeCountry}>
                          <option value={countries}>-Select Country-</option>
                            { countries.map((country) =>
                              <option value={country.id}>{country.country}</option> )
                             }
                      </select>&#42;
                  </InputGroup>
                  <InputGroup >
                
                      <select id="cityId" name="cityId" 
                        className='temp-div-signUp-mb-4' onChange={handleChange}>
                          <option value={cityId}>-Select City-</option>
                            { cities.map((city) =>
                              <option value={city.id}>{city.cityName}/{city.state}</option> )
                             }
                      </select>
                  </InputGroup>
                  <InputGroup>
                      <select id="languageId" name="languageId" 
                        className='temp-div-signUp-mb-4' onChange={handleChange}>
                          <option value={languageId}>Select Language</option>
                            { languages.map((language) =>
                              <option value={language.id}>{language.language}</option> )
                            }
                      </select>&#42;
                  </InputGroup>
                  <InputGroup>
                    <select id="professionId" name="professionId" 
                        className='temp-div-signUp-mb-4' onChange={handleChange}>
                          <option value={professionId}>Select Profession</option>
                            { professions.map((profession) =>
                              <option value={profession.id}>{profession.profession}</option> )
                            }
                      </select>&#42;
                  </InputGroup>
                  <InputGroup className='temp-div-signUp-mb-3'>
                    <Input
                      className="tempForm-signup-input"
                      type='text'
                      onChange={handleChange}
                      name='lookingJobAt'
                      value={lookingJobAt}
                      placeholder='looking Job At' ></Input>&#42;
                  </InputGroup>
                  <Button onClick={addUser} id="temp-form-submit-btn" block>Create Account</Button>
                  {pop.showPopup ?
                    <ModelPopup
                      text={pop.text}
                      ext={pop.ext}
                    />
                    : null
                  }
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default UserSignUp
