import React from 'react';
import "../../../../css/CVJallowTemplate1.css";


function NavbarLogo() {
    return(
        <div className='jallowTemp1DivLogoSec'>
            <div className='jallowTemp1ImageLogo'>
                <img src='https://cdn5.vectorstock.com/i/1000x1000/92/29/initial-letter-cv-logo-template-design-vector-21949229.jpg' width="70px" height="60px" alt='logo' />
            </div>
            <div className='jallowTemp1IconLogo'>
                <a href="#"><i class="fas fa-mobile"></i></a>
                <a href="#"><i class='fas fa-tablet'></i></a>
            </div>
        </div>
    )
}

function Toggle() {
    return(
        <>
            <input type='checkbox' id='check' />
            <label htmlFor='check' className='jallowTemp1Checkbtn'>&#9776;</label>
        </>
    )
}

function Menu() {
    return(
        <div>
            <Toggle />
            <ul className="jallowTemp1MenuList">
                <li className='jallowTemp1MenuLink'><a href='#'>Resume</a></li>
                <li className='jallowTemp1MenuLink'><a href='#'>Portfolio</a></li>
            </ul>
        </div>
    )
}

function JallowTemplate1() {
    return (
        <section className='JallowTemplate1'>
            <section className='jallowTemp1Resume'>
                <div className='jallowTemp1NavNavbar'>
                    <NavbarLogo />
                    <Menu />
                </div>
                <section className='jallowTemp1MainSection'>
                    <div className='jallowTemp1SubSection'>
                        <div className='jallowTemp1ProfileContainer'>
                            <div className='jallowTemp1ProfileHead'>
                                <img src='https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png' alt='Profile Picture' />
                                <h1 className='jallowTemp1ProfileName'>NICOLA RIDER</h1>
                                <p className='jallowTemp1ProfileTitle'>Testter</p>
                            </div>
                            <div className='jallowTemp1InfoDetails'>
                                <div className='jallowTemp1Contact'>
                                    <i class="fas fa-user-tie"></i>
                                    <p>Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.</p>
                                </div>
                                <div className='jallowTemp1Contact'>
                                <i class="fas fa-phone-alt"></i>
                                    <div className='jallowTemp1TestCol'>
                                        <p>(+30) 55 99 5555</p>
                                        <p>(+30) 555 999 5555</p>
                                    </div>
                                </div>
                                <div className='jallowTemp1Contact'>
                                    <i class="fas fa-envelope"></i>
                                    <div className='jallowTemp1TestCol'>
                                        <p>info@mail.com</p>
                                        <p>email@mail.com</p>
                                    </div>
                                </div>
                                <div className='jallowTemp1Contact'>
                                    <i class="fas fa-map"></i>
                                    <div className='jallowTemp1TestCol'>
                                        <p>101 Street Avenue</p>
                                        <p>lorem Street 105</p>
                                    </div>
                                </div>
                                <div className='jallowTemp1Contact'>
                                    <div className='jallowTemp1SkillsPersonal'>
                                        {/* <i class="far fa-file"></i>
                                        <p>Personal skills</p> */}
                                        <p className='jallowTemp1Skills'><i class="far fa-file"></i>Personal skills</p>
                                        <ul className='jallowTemp1ContactSkills'>
                                            <li>Adobe Photoshop</li>
                                            <li>HTML 5 & CSS 3</li>
                                            <li>Java Script</li>
                                            <li>Adobe Illustrator</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='jallowTemp1Body'>
                            <div className='jallowTemp1ContentSide'>
                                <div className='jallowTemp1ContentSubSec'>
                                    <h1 className='jallowTemp1ContentH1'><i class="fas fa-check-double"></i> Work Experience</h1>
                                    <p className='jallowTemp1ContentTitle'>UI SOFTWARE ENGINEER @ Amnick</p>
                                    <p className='jallowTemp1ContentDate'>JAN 2021 - Present</p>
                                    <p className='jallowTemp1ContentInfo'>Simple feedback and engagement tools for teams that want to build and ship winning products. Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.</p>
                                </div>
                                <div className='jallowTemp1ContentSubSec'>
                                    <p className='jallowTemp1ContentTitle'>Graphic Designer @ CreativeWorld</p>
                                    <p className='jallowTemp1ContentDate'>FEB 2018 - JUL 2019</p>
                                    <p className='jallowTemp1ContentInfo'>Software engineers are the masterminds between computer programs and apps. They build extensive systems that control networks or apps that accomplish tasks. The skillset varies from position to position</p>
                                </div>
                            </div>
                                
                            <div className='jallowTemp1ContentSide'>
                                <div className='jallowTemp1ContentSubSec'>
                                    <h1 className='jallowTemp1ContentH1'><i class="fas fa-graduation-cap"></i> Education</h1>
                                    <p className='jallowTemp1ContentTitle'>Full Stack Developer @ Social Hackers Academy</p>
                                    <p className='jallowTemp1ContentDate'>SEP 2018 - DEC 2020</p>
                                    <p className='jallowTemp1ContentInfo'>For meeting the expectation of leading the team to work the specified taxts in the labour field</p>
                                </div>
                                <div className='jallowTemp1ContentSubSec'>
                                    <p className='jallowTemp1ContentTitle'>Art & Multimedia @ Lorem University</p>
                                    <p className='jallowTemp1ContentDate'>JAN 2013 - DEC 2014</p>
                                    <p className='jallowTemp1ContentInfo'>In software testing, specialists oversee the quality assurance stage of software development and deployment. They maintain this by conducting manual tests to determine product fitness.</p>
                                </div>
                                <div className='jallowTemp1ContentSubSec'>
                                    <p className='jallowTemp1ContentTitle'>Post Graduate @ Lorem High School</p>
                                    <p className='jallowTemp1ContentDate'>MAR 2010 - DEC 2012</p>
                                    <p className='jallowTemp1ContentInfo'>For meeting the expectation of leading the team to work the specified taxts in the labour field</p>
                                </div>
                            </div>

                            <div className='jallowTemp1ContentSide'>
                                <p className='jallowTemp1ContentInterest'><i class="fas fa-stopwatch"></i> Interests</p>
                                {/* <div className='jallowTemp1ContentSubSec'> */}
                                    <div className='jallowTemp1ContentHobbies'>
                                    <i class="fas fa-guitar"></i>
                                    <i class="fas fa-plane"></i>
                                    <i class="far fa-futbol"></i>
                                    <i class="fas fa-book-open"></i>
                                    <i class="fas fa-code"></i>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default JallowTemplate1
