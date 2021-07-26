import React from 'react';
import '../../css/HomeCentral.css';
import FirstSectionCards from './Central/FirstSectionCards/FirstSectionCards';
import ToolsWeUse from './Central/ToolsWeUse/ToolsWeUse';
import Portfolio from './Central/Portfolio/Portfolio';

function Central() {
  return (
    <div className='central_home-container'>
      {/* <!-- Main page --> */}
      <div className='central-div-welcome-content'>
        <h1 id='services'>Welcome to the StartUP Team</h1>
        <hr className='central-hr-welcome'></hr>
        <p>For all your professional web designing and development</p>
      </div>

      {/* <!-- first section --> */}
      <FirstSectionCards />

      {/* border */}
      <hr id='portfolio' className='central-hr-horizonal'></hr>

      {/* <!-- portfolio --> */}
      <div id='portfolio_more' className='central-div-port'>
        <h1 className='central-div-port-head'>portfolio</h1>
        <p className='central-div-port-text'>
          <strong>
            Our Team of experts can help you bring your ideas in to light!
          </strong>
        </p>
        <Portfolio />
      </div>

      <hr className='central-hr-horizonal'></hr>
      {/* web-tools */}
      <div className='central-div-web-tools'>
        <h3 className='central-div-web-tools-head'>
          We built all what you need, for quality web Design and development
          Services?
        </h3>
        <p className='central-div-web-tools-text'>
          <strong>
            Here are some of the best web languages, framework/library and
            designing we used
          </strong>
        </p>
      </div>
      {/* designing and development tools */}
      <ToolsWeUse />
    </div>
  );
}

export default Central;
