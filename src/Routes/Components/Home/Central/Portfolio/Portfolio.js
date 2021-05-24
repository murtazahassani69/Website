import React from 'react';
import '../../../../css/HomeCentral.css';
import Templates_cv from '../../../../imgs/templates_cv.jpg';
import Templates_cv2 from '../../../../imgs/templates_cv2.jpg';
// import storePic from '../../../../imgs/store.png';
// import restaurantPic from '../../../../imgs/restaurant.png';

const Portfolio = () => {
  const cardInfo = [
    {
      img: `${Templates_cv2}`,
      title: 'Live Templates',
      text: 'View a sample demo from a restaurant. This page is currently static',
      link: '/templates',
    },
    // {
    //   img: `${storePic}`,
    //   title: 'Store Demo',
    //   text:
    //     'View a sample demo from an online store. This page is currently static',
    //   link: '/store',
    // },
    // {
    //   img: `${restaurantPic}`,
    //   title: 'Marketing',
    //   text:
    //     'View a sample demo from a restaurant. This page is currently static',
    //   link: '/restaurant',
    // },
    {
      img: `${Templates_cv}`,
      title: 'Resume Templates',
      text: 'View a sample demo from a restaurant. This page is currently static',
      link: '/templates',
    },
    // {
    //   img: `${Templates_cv}`,
    //   title: 'Support',
    //   text:
    //     'View a sample demo from a restaurant. This page is currently static',
    //   link: '/templates',
    // },
  ];

  const displayCards = cardInfo.map((el, i) => (
    <div key={i} className='central-port-one-card'>
      <a href={el.link} className='central-port-active-link'>
        <div className='central-port-imgContainer'>
          <img src={el.img} alt={el.title} />
        </div>
        <h2>{el.title}</h2>
        <p>{el.text}</p>
      </a>
    </div>
  ));
  return <div className='central-port-container'>{displayCards}</div>;
};

export default Portfolio;
