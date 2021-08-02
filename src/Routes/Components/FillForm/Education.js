import React, { useState } from 'react';
import '../../css/FillForm.css';
import Form from './Form.js';

const Education = ({
  addSection,
  edu,
  handleEduChange,
  handleChange,
  education,
}) => {
  const [sectionToProcess, setSectionToProcess] = useState();
  // const [educationForms, setEducationForms] = useState([
  //   { id: null, component: null },
  // ]);

  // const addSection = () => {
  //   let id = Math.floor(Math.random() * 1000);

  //   setEducationForms((prev) => [
  //     ...prev,
  //     {
  //       id,
  //       component: <Form />,
  //     },
  //   ]);
  // };
  console.log('Edu from DUCATION:', edu);
  const displayEducationForms = edu.map((el, i) => (
    <div className='fillForm-fullwidth-form' key={i}>
      {el.component}
    </div>
  ));

  let sectionID = Math.floor(Math.random() * 1000);
  const handleClick = () => {
    addSection(
      sectionID,
      <Form
        section={sectionToProcess}
        edu={edu}
        handleEduChange={handleEduChange}
      />
    );
  };

  // console.log(sectionToProcess);

  const findDataToChange = (id) => {
    let index = edu.find((el) => {
      console.log(el);
      return el.id === id;
    });
    // console.log(id);
    setSectionToProcess(index);
  };
  // findDataToChange(sectionID);
  return (
    <div className='fillForm-education-container'>
      <h3>Education</h3>
      {/* <Form  handleChange={handleChange} /> */}
      {displayEducationForms}
      <div className='fillForm-add-container'>
        <i className='fas fa-plus' id='fillForm-plus-icon' />
        <button className='fill-form-add-btn' onClick={handleClick}>
          Add Eduction
        </button>
      </div>
    </div>
  );
};

export default Education;
