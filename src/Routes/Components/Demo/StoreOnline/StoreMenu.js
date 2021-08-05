import React from 'react';
import '../../../css/Storemenu.css';
// import './Storemenu.css';

function Toggle(){
  return(
    <>
      <input type="checkbox" id='store-menu-check'/>
      <label htmlFor="store-menu-check" className='store-menu-checkbtn'>&#9776;</label>
    </>
  )
}

function TextMenu(){
    return(
      <>
        <Toggle />
        <ul id="store-menu-content">
            <li className="store-menu-text"><a href="#">MEN</a></li>
            <li className="store-menu-text"><a href="#">WOMEN</a></li>
            <li className="store-menu-text"><a href="#"> KIDS</a></li>
            <li className="store-menu-text"><a href="#"> NEW</a></li>
            <li className="store-menu-text"><a href="#"> BRANDS</a></li>
            <li className="store-menu-text"><a href="#"> COLLECTIONS</a></li>
            <li className="store-menu-text"><a href="#"> RELEASES</a></li>
            <li className="store-menu-text"><a href="#"> SALE</a></li>
        </ul>
      </>
    )
}

function Logo(){
  return(
      <div id='store-menu-logo'>
          <img src='https://wpsites.net/wp-content/uploads/2013/08/new-logo.png' width="140px" height="50px" />
      </div>
  )
}

function Right(){
  return(
      <div id='store-menu-right'>
          <form action="" className='store-menu-formSearch'>
            <i className="fas fa-search"><input type="text" className='store-menu-search' placeholder='Search'/></i>
            {/* <i class="fas fa-search"><input type="text" className='search' placeholder='Search'/></i> */}
            {/* <button className='search'>🍳</button> */}
          </form>
          <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/white-heart_1f90d.png' className='store-menu-myImg1'/>
          <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/274/shopping-cart_1f6d2.png' className='store-menu-myImg2'/>
      </div>
  )
}

function Login(){
  return(
      <div id="store-menu-loginClient">
          <span className='store-menu-signing'>Sign In / Register</span>
          <span className="store-menu-client">Customer Service</span>
      </div>
  )
}

function Menu() {
  return (
    <div id="store-menu-logMenu">
      <Login />
      <nav className="store-menu-storeMenu">
          <Logo />
          <TextMenu />
          <Right />
      </nav>
    </div>
  );
}

export default Menu;