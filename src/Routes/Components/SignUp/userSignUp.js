import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap'
import '../../css/UserSignUp.css'

import ModelPopup from './ModelPopup'

const UserSignUp = (props) => {
  const initialInputState = { name: '',lastName: '', email: '', password:'', password2:'',
  gender: '',dateOfBird: '',country: '',language: '',profession: '',lookingJobAt: '', }
  const [userData, setUserData] = useState(initialInputState)
  const { name,lastName, email, password, password2, gender, dateOfBird, country, language, profession, lookingJobAt } = userData
  const history = useHistory()
  const [pop, setPop] = useState({
    showPopup: false,
    text:'register',
    ext:'ext'
  })

  const handleChange= ( e ) => {
    e.preventDefault()
    setUserData({ ...userData, [e.target.name]:e.target.value })
  }

  const addUser = () => {  
    if(password!==password2){
      setPop({text:"Ooppps ! Your password doesn`t match"})
        
    }else{ setPop({showPopup:true,text:"Ooppps ! Your password doesn`t match"})
      if (name.length>=3&password.length>=3&email.length>=3){
        
               console.log('Register SUCCESS now you can Login')
              }
            
    }
  }


  return(
    <div className="temp-div-signUp-container" >
      <Container>
        <Row className='justify-content-center'>
          <Col md='9' lg='7' xl='6'>
            <Card className='mx-4-card'>
              <CardBody className='p-4'>
                <Form id="temp-div-signUp-form">
                  <div className="mb-2 pageheading">
                    <div className='col-sm-12 btn btn-primary'>
                              Sign Up
                    </div>
                  </div>
                  <InputGroup className='mb-3'>
                    <Input
                      type='text'
                      onChange={handleChange}
                      name='name'
                      value={name}
                      placeholder='Name' ></Input>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Input
                      type='text'
                      onChange={handleChange}
                      name='lastName'
                      value={lastName}
                      placeholder='Last Name' ></Input>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Input
                      type='text'
                      name = 'email'
                      value = {email}
                      onChange={handleChange}
                      placeholder='email'></Input>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Input
                      type='password'
                      name = 'password'
                      value = {password}
                      onChange={handleChange}
                      placeholder='password'></Input>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Input
                      type='password'
                      name = 'password2'
                      value = {password2}
                      onChange={handleChange}
                      placeholder='confirm password'></Input>
                  </InputGroup>
                  <InputGroup className='mb-3'>
        
                    <label for="gender">Male </label>
                    <Input
                      type='radio'
                      onChange={e =>
                        e.target.checked ? { gender: "Male"} : ""
                      }
                      name='gender'
                      value={gender}
                      placeholder='gender' ></Input>
                      <label for="gender">Female </label>
                      <Input
                      type='radio'
                      onChange={e =>
                        e.target.checked ? { gender: "Male"} : ""
                      }
                      name='gender'
                      value={gender}
                      placeholder='gender' ></Input>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                  <label for="dateOfBird">Birthday </label>
                    <Input
                      type='date'
                      onChange={handleChange}
                      name='dateOfBird'
                      value={dateOfBird}
                      placeholder='date Of Bird' ></Input>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                      <select id="country" name="country" onChange={handleChange}>
                          <option value="country">---Country---</option>
                          <option value="Greece">Greece</option>
                          <option value="UK">UK</option>
                          <option value="USA">USA</option>
                      </select>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Input
                      type='text'
                      onChange={handleChange}
                      name='language'
                      value={language}
                      placeholder='language' ></Input>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Input
                      type='text'
                      onChange={handleChange}
                      name='profession'
                      value={profession}
                      placeholder='profession' ></Input>
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <Input
                      type='text'
                      onChange={handleChange}
                      name='lookingJobAt'
                      value={lookingJobAt}
                      placeholder='looking Job At' ></Input>
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