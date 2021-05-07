import React from 'react';
import '../../css/HomeCentral.css';
import FirstSectionCards from './Central/FirstSectionCards/FirstSectionCards';
import ToolsWeUse from './Central/ToolsWeUse/ToolsWeUse';
import Portfolio from './Central/Portfolio/Portfolio';

function Central() {
  return (
    <div className='central_home-container'>
      {/* <!-- Main page --> */}
      <div class='central-div-welcome-content'>
        <h1>Welcome to the StartUP Team</h1>
        <hr class='central-hr-welcome'></hr>
        <p>For all your professional web designing and development</p>
      </div>

      {/* <!-- first section --> */}
      <FirstSectionCards />

      {/* border */}
      <hr class='central-hr-horizonal'></hr>

      {/* <!-- portfolio --> */}
      <div class='central-div-port'>
        <h1 class='central-div-port-head'>portfolio</h1>
        <p class='central-div-port-text'>
          <strong>
            Our Team of expert can help you bring your ideas in to light!
          </strong>
        </p>
      </div>
      <Portfolio />

      <hr class='central-hr-horizonal'></hr>
      {/* web-tools */}
      <div className='central-div-web-tools'>
        <h3 class='central-div-web-tools-head'>
          We built all what you need, for quality web Design and development
          Services?
        </h3>
        <p class='central-div-web-tools-text'>
          <strong>
            Here is some of the best web languages, framwork/libarary and
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
