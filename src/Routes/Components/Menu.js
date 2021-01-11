import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="nav-gen-menu">
      <ul className="nav-links">
        <li><Link to='/'>Default<img src="" alt="" /></Link></li>
        <li><Link to='/'>Default<img src="" alt="" /></Link></li>
        <li><Link to='/'>Default<img src="" alt="" /></Link></li>
      </ul>
    </nav>
  );
}

export default Menu;