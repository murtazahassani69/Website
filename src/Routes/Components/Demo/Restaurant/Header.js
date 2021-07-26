import React from 'react';
import "../../../css/ResHeader.css";
import header1 from '../Restaurant/imgs/rest-left.png';
import header2 from '../Restaurant/imgs/rest-right.png';

function Header() {
    return (
       <header className="rest_header">
            <div className="rest_header-title">
                <h3>Discover</h3>
                <h1 className='RHT'>
                    London Plate
                </h1>
                <p className="rest_header-openhours">Opening hours</p>
                <div className="rest_header-timetable">
                    <p className="rest_header-days">Monday - Friday:</p> 
                    <p className="rest_header-hours" >08:00 a.m. - 23:00 p.m.</p> 
                    <p className="rest_header-weekends">Weekends:</p> 
                    <p className="rest_header-hours" >08:00 a.m. - 23:00 a.m.</p> 
                </div>
            </div>
           <img  alt ="plate1" src={header1} className="rest_header-img1"></img>
           <img  alt ="plate1" src={header2} className="rest_header-img2"></img>
        </header>
    );
}

export default Header;
