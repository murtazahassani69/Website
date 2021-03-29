import React from 'react';
import '../../../css/TempDisplayCental.css';

import TempJ1 from './img/temp-j1.png';
import TempMa1 from './img/temp-ma1.png';
import TempY1 from './img/temp-y1.png';
import TempY2 from './img/temp-y2.png';
import TempB1 from './img/temp-b1.png';
import TempMu1 from './img/temp-mu1.png';
import TempJ2 from './img/temp-j2.png';

import TempJ3 from './img/temp-j3.png';
import TempB2 from './img/temp-b2.png';
import TempY3 from './img/temp-y3.png';
import TempMu2 from './img/temp-mu2.png';
import TempMa2 from './img/temp-j2.png';

function Central() {
  return (
    <div>
      <DisplayRes />
      <DisplayResAni />
    </div>
  );
}

function DisplayRes(){
  return(
    <section className='JaTDCentral'>
      <div className='JATDCentralContainer'>
        <p className='JaTempDisplayText'>
          Here, we offer you the findness, simple and excellent resume templates that you can find in the internet, and use for all you job searches. <br />
          We're wishing you GoodLuck on your job search after selecting one of the resumes tha'ts matchest your need!
        </p>
        <div className='JATDCentralContent'>
          <DisplayTemp img={TempJ1}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayTemp img={TempMa1}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayTemp img={TempY1}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayTemp img={TempY2}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayTemp img={TempB1}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayTemp img={TempMu1}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayTemp img={TempJ2}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
        </div>
      </div>
    </section>
  )
}

function DisplayTemp ({img, heading, paragph}) {
  return(
    <div className='JATDcentralSection'>
      <a href=''>
        {/* /templateJ1 */}
        <div className='JaDTemplateIamge'>
          <img src={img} alt='' />
        </div>
      </a>
      <h3 className='JaDTemplateHead'>{heading}</h3>
      <p className='JaDTemplateText'>{paragph}</p>
    </div>
  )
}

function DisplayResAni () {
  return(
    <section className='JaTAniCentral'>
      <div className='JaTAniCentralContainer'>
        <p className='JaTempDisplayText'>
          <span>Thank You for scrolling down! And again!<br /></span>
          Here, we offer you the findness, simple and excellent resume templates that you can find in the internet, and use for all you job searches. <br />
          We're wishing you GoodLuck on your job search after selecting one of the resumes tha'ts matchest your need!
        </p>
        <div className='JaTAniCentralContent'>
          <DisplayAniTemp img={TempJ3}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayAniTemp img={TempB2}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayAniTemp img={TempY3}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayAniTemp img={TempMu2}
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
          <DisplayAniTemp img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfT5VH2ZnqIk34Szx0sKBwgTJef9bAYuOog&usqp=CAU'
          heading='Your Prefered Resume Template'
          paragph='$ git checkout templateDisplay Switched to branch templateDisplay' />
        </div>
      </div>
    </section>
  )
}

function DisplayAniTemp ({img, heading, paragph}) {
  return(
    <div className='JaTAniSection'>
      <a href=''>
        {/* /templateJ1 */}
        <div className='JaTAniTemplateIamge'>
          <img src={img} alt='' />
        </div>
      </a>
      <h3 className='JaTAniTemplateHead'>{heading}</h3>
      <p className='JaTAniTemplateText'>{paragph}</p>
    </div>
  )
}

export default Central;