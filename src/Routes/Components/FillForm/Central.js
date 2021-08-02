import React, { useEffect, useState } from 'react';
import '../../css/FillForm.css';
import PersonalDetails from './PersonalDetails';
import Education from './Education';

function Central() {
  const [step, setStep] = useState(1);
  // const eduSchema = {
  // id: 0,
  // component: undefined,
  //   school: '',
  //   degree: '',
  //   startDate: '',
  //   endDate: '',
  //   city: '',
  // };

  const [edu, setEdu] = useState([
    {
      id: undefined,
      component: undefined,
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      city: '',
    },
  ]);
  const [values, setValues] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      photo: undefined /* photo is an Object! */,
      profession: '',
      email: '',
      phone: '',
    },
    education: [
      {
        id: 0,
        component: undefined,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        city: '',
      },
    ],
    workExperience: [
      {
        id: 0,
        jobTitile: '',
        employer: '',
        startDate: '',
        endDate: '',
        city: '',
      },
    ],
    others: [
      {
        hobby: '',
      },
    ],
  });

  const steps = [
    {
      id: 1,
      text: 'Personal Details',
    },
    {
      id: 2,
      text: 'Education',
    },
    {
      id: 3,
      text: 'Work Experience',
    },
    {
      id: 4,
      text: 'Others',
    },
  ];

  const { personalInfo, education, workExperience } = values;

  const nextStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  const addSection = (id, value) => {
    setEdu((prev) => [...prev, { id, component: value }]);
  };

  const handleChange = (input, value, sectionId) => {
    switch (step) {
      case 1:
        let newPersonal = {
          ...values,
          personalInfo: { ...personalInfo, [input]: value },
        };
        setValues(newPersonal);
        break;
      case 2:
        return;
      case 3:
        return;
      case 4:
        return;

      default:
        break;
    }
  };

  //-------------------- TEST ----------------------

  // useEffect(() => {
  //   const eduSchema = {
  //     id: 0,
  //     component: undefined,
  //     school: '',
  //     degree: '',
  //     startDate: '',
  //     endDate: '',
  //     city: '',
  //   };
  //   // setValues((prev) => {
  //   //   // console.log(prev);
  //   //   return education.push({ ...prev.education[0], id: 1 });
  //   // });
  //   setEdu((prev) => [...prev, { ...eduSchema, city: 'HER' }]);
  // }, []);

  const handleEduChange = (input, value) => {
    setEdu((prev) => [...prev, { [input]: value }]);
  };
  console.log(edu);
  // ------------------------------------------------

  const displaySteps = () =>
    steps.map((el) => (
      <div className='fillForm-grouped' key={el.id}>
        <div className='fillForm-num_txt_group'>
          <div className='fillForm-step-round'>{el.id}</div>
          <p>{el.text}</p>
        </div>
        {el.id !== 4 && <hr className='fillForm-horizontal-line' />}
      </div>
    ));

  const displayCard = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            handleChange={handleChange}
            personalInfo={personalInfo}
          />
        );

      case 2:
        return (
          <Education
            addSection={addSection}
            handleChange={handleChange}
            education={education}
            edu={edu}
            handleEduChange={handleEduChange}
          />
        );
      default:
        return (
          <PersonalDetails
            handleChange={handleChange}
            personalInfo={personalInfo}
          />
        );
    }
  };

  return (
    <div className='fillForm-container'>
      <div className='fillForm-header'>
        <h1>Let's start with the first step</h1>
        <h4>
          Please fill the boxes below in order to personalize your CV template
          and have a personal experience choosing one of our resumes. We respect
          your personal information and we will not share your data with any
          third party sites.{' '}
        </h4>
      </div>
      <div className='fillForm-steps-container'>{displaySteps()}</div>

      {/* <PersonalDetails />
      <hr className='fillForm-hr-centarl' />
      <Education /> */}
      {displayCard()}
      <button onClick={(e) => prevStep(e)}>Prev</button>
      <button onClick={(e) => nextStep(e)}>Next step</button>
    </div>
  );
}

export default Central;
