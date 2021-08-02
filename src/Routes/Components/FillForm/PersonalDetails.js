import React from 'react';
import '../../css/FillForm.css';
import avatar from '../../imgs/avatar.png';

const PersonalDetails = ({ handleChange, personalInfo }) => {
  const { firstName, lastName, profession, email, phone, photo } = personalInfo; // photo is an Object!

  const labelsInfo = [
    {
      id: 'profession',
      name: 'Profession',
      type: 'text',
      extras: null,
      value: profession,
    },
    {
      id: 'photo',
      name: '',
      type: 'file',
      extras: 'image/png, image/jpeg',
      value: photo,
    },
    {
      id: 'firstName',
      name: 'First Name',
      type: 'text',
      extras: null,
      value: firstName,
    },
    {
      id: 'lastName',
      name: 'Last Name',
      type: 'text',
      extras: null,
      value: lastName,
    },
    {
      id: 'email',
      name: 'Email',
      type: 'mail',
      extras: null,
      value: email,
    },
    {
      id: 'phone',
      name: 'Phone',
      type: 'text',
      extras: null,
      value: phone,
    },
  ];

  const displayPhoto = () => {
    const selectedPhoto = document.getElementById('photo').files[0];
    if (selectedPhoto.size > 0) {
      var fileReader = new FileReader();
      fileReader.onload = function (event) {
        document
          .getElementById('cvPhoto')
          .setAttribute('src', event.target.result);
        handleChange('photo', event.target.result);
      };
      fileReader.readAsDataURL(selectedPhoto);
    }
  };

  const displayLabels = labelsInfo.map((el) => (
    <div
      key={el.id}
      className={
        el.id === 'photo' ? 'fillForm-photo_label' : 'fillForm-label-container'
      }
    >
      <label htmlFor={el.id} className='fillForm-pd-align_labels'>
        {el.name}
      </label>
      {el.id === 'photo' && (
        <img
          id='cvPhoto'
          src={photo === undefined ? avatar : photo}
          alt='cv_photo'
          className='fillForm-avatar'
        />
      )}
      <input
        type={el.type}
        id={el.id}
        accepts={el.type === 'file' ? el.extras : null}
        onChange={
          el.id === 'photo'
            ? () => displayPhoto()
            : (e) => handleChange(el.id, e.target.value)
        }
        value={el.type === 'file' ? '' : el.value}
      />
    </div>
  ));
  return (
    <div className='fillForm-personal_details'>
      <h3>Personal Details</h3>
      <div className='fillForm-pd-input-container'>{displayLabels}</div>
    </div>
  );
};

export default PersonalDetails;
