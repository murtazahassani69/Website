import React from 'react';
import './style.css';
import login from '../../imgs/login.svg';
import chooseCV from '../../imgs/choose-cv.svg';
import checkPay from '../../imgs/check-pay.svg';

const FirstSectionCards = () => {
  const cardsInfo = [
    {
      title: 'Log in / Sign up',
      description: `Create an account if you don't already have one. It takes only one minute.`,
      btn: 'Our Inovation',
      image: `${login}`,
    },
    {
      title: 'Choose CV',
      description: 'Choose the CV template that suits you among many designs.',
      btn: 'Our Inovation',
      image: `${chooseCV}`,
    },
    {
      title: 'Check & Pay',
      description: `Receive your CV template via link, try it out for two days and if it's the perfect one for you, proceed to full purchase.`,
      btn: 'Our Inovation',
      image: `${checkPay}`,
    },
  ];

  const displayCards = cardsInfo.map((el, i) => {
    return (
      <div key={i} class='one-card'>
        <div className='imgContainer'>
          <img src={el.image} alt={`${el.title}`} className='card-image' />
        </div>
        <h4>{el.title}</h4>
        <div className='cardText'>{el.description}</div>
        {/* <a href='#' class='central-div-btn'>
          {el.btn}
        </a> */}
      </div>
    );
  });
  return (
    <div className='firstSectionContainer'>
      <div className='firstSectionTitle'>
        Enjoy our services in three simple steps
      </div>
      <div className='cards-container'>{displayCards}</div>
    </div>
  );
};

export default FirstSectionCards;
