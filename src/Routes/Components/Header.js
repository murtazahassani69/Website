import React from 'react';
import header_img from '../imgs/header.png';

function Header() {
  return (
      <div>
          <img src={header_img} width="100%" height="auto" object-fit= "contain"></img>
      </div>
  );
}

export default Header;