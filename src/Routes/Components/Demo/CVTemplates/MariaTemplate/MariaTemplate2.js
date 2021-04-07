import React, { Component } from 'react';
import '../../../../css/CVMariaTemplate2.css';
function MariaTemp2(){
    return(

        <div className="CVMarTemp2-container">
            <div class="CVMarTemp2-navigation">
                <input type="checkbox" class="CVMarTemp2-navigation__checkbox" id="navi-toggle"></input>

                <label for="navi-toggle" class="CVMarTemp2-navigation__button">
                    <span class="CVMarTemp2-navigation__icon">&nbsp;</span>
                </label>

                <div class="CVMarTemp2-navigation__background">&nbsp;</div>

                <nav class="CVMarTemp2-navigation__nav">
                    <ul class="CVMarTemp2-navigation__list">
                        <li class="navigation__item"><a href="#" class="CVMarTemp2-navigation__link"><span>05</span>Book now</a></li>
                        <li class="CVMarTemp2-navigation__item"><a href="#" class="CVMarTemp2-navigation__link"><span>01</span>About Natous</a></li>
                        <li class="CVMarTemp2-navigation__item"><a href="#" class="CVMarTemp2-navigation__link"><span>02</span>Your benfits</a></li>
                        <li class="CVMarTemp2-navigation__item"><a href="#" class="CVMarTemp2-navigation__link"><span>03</span>Popular tours</a></li>
                        <li class="CVMarTemp2-navigation__item"><a href="#" class="CVMarTemp2-navigation__link"><span>04</span>Stories</a></li>
                        <li class="navigation__item"><a href="#" class="CVMarTemp2-navigation__link"><span>05</span>Book now</a></li>     
                    </ul>
                </nav>
            </div>
        </div>    
    )
}

export default MariaTemp2;