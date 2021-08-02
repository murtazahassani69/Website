import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../css/FillForm.css';

const Form = ({ edu, sectionToProcess, handleChange, handleEduChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { school, degree, startDate, endDate, city } = edu;
  const labelsInfo = [
    {
      id: 'school',
      name: 'School',
      type: 'text',
      value: school,
    },
    {
      id: 'degree',
      name: 'Degree',
      type: 'text',
      value: degree,
    },
    {
      id: 'startDate',
      name: 'Start',
      type: 'text',
      value: startDate,
    },
    {
      id: 'endDate',
      name: 'End Date',
      type: 'text',
      value: endDate,
    },
    {
      id: 'city',
      name: 'City',
      type: 'text',
      value: city,
    },
  ];

  // const findSameData = (id) => {
  //   let findIndex = state.findIndex((el) => el.id === id);
  //   return findIndex;
  // };

  // console.log(id, findSameData(id), state);

  // const handleInput = (e) => {
  //   const { value, name } = e.target;
  //   setState((prev) => ({ ...prev, [name]: value }));
  // };

  const displayLabels = labelsInfo.map((el) => (
    <form key={el.id} className='fillForm-label-container'>
      <label htmlFor={el.id} className='fillForm-pd-align_labels'>
        {el.name}
      </label>
      <input
        id={el.id}
        type={el.type}
        name={el.id}
        value={el.value}
        onChange={(e) => handleEduChange(el.id, e.target.value)}
      />
    </form>
  ));
  // handleChange(el.id, e.target.value)
  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={'fillForm-form-container'}>
      <div className='fillFrom-form_header'>
        <p>
          {/* {state.degree === ''
            ? '(Currently Empty)'
            : `${state.degree} at ${state.school}`} */}
        </p>
        <FontAwesomeIcon
          icon={isExpanded ? faChevronUp : faChevronDown}
          onClick={handleExpand}
        />
      </div>
      <div
        className={
          isExpanded
            ? 'fillForm-pd-input-container'
            : 'fillForm-inputsForm-closed'
        }
      >
        {displayLabels}
      </div>
    </div>
  );
};

export default Form;
