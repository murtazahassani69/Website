import React from 'react';
import '../../../../css/HomeCentral.css';
import login from '../../../../imgs/login.svg';
import chooseCV from '../../../../imgs/choose-cv.svg';
import checkPay from '../../../../imgs/check-pay.svg';

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
      <div key={i} class='central-one-card'>
        <div className='central-imgContainer'>
          <img src={el.image} alt={`${el.title}`} className='central-card-image' />
        </div>
        <h4>{el.title}</h4>
        <div className='central-cardText'>{el.description}</div>
        {/* <a href='#' class='central-div-btn'>
          {el.btn}
        </a> */}
      </div>
    );
  });
  return (
    <div className='central-firstSectionContainer'>
      <div className='central-firstSectionTitle'>
        Enjoy our services in three simple steps
      </div>
      <div className='central-cards-container'>{displayCards}</div>
    </div>
  );
};

export default FirstSectionCards;
