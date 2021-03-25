import React from 'react';
import "../../../../css/CVJallowTemplateAn1.css";
import Brand from './imgs/Animate-imgs/brand-dark.png';

import Background from './imgs/Animate-imgs/bck3.mp4';
import Coffee from './imgs/Animate-imgs/CoffeeWebsite.jpg';
import CoffeeShop from './imgs/Animate-imgs/Coffee-shop.jpg';
import PhotoSquare from './imgs/Animate-imgs/photo-square.jpg';
import WeddingDJ from './imgs/Animate-imgs/wedding-dj.jpg';
import Developer from './imgs/Animate-imgs/w-d.mp4';
import Laptop from './imgs/Animate-imgs/laptopV.jpeg';

import Img1 from './imgs/Animate-imgs/img1.jpeg';
import Img2 from './imgs/Animate-imgs/img2.jpeg';
import Img3 from './imgs/Animate-imgs/img3.jpeg';
import Img4 from './imgs/Animate-imgs/img4.jpeg';
import Img5 from './imgs/Animate-imgs/img5.jpeg';
import Img6 from './imgs/Animate-imgs/img6.jpeg';
import Img7 from './imgs/Animate-imgs/img7.jpeg';
import Img8 from './imgs/Animate-imgs/img8.jpeg';
import Img9 from './imgs/Animate-imgs/img9.jpeg';
import Img10 from './imgs/Animate-imgs/img10.jpeg';

import Vlog1 from './imgs/Animate-imgs/bp1.jpg';
import Vlog2 from './imgs/Animate-imgs/bp2.jpg';
import Vlog3 from './imgs/Animate-imgs/bp3.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

function CVAnimateJallow() {
    AOS.init({
        offset: 300,
        duration: 1000
    })
    return (
        <div className='JAnimateCVTemp'>
            <Header />
            <SectionHeader />
            <Name />
            <Passion />
            <Projects />
            <About />
            <Office />
            <LifeDesign />
            <Services />
            <BlogPost />
            <Footer />
            
        </div>
    )
}

function Header() {
    return(
        <header className='JAnimatedHeader'>
            <div className='JAnimatedHeaderInner JAnimatedHeaderInContent'>
                <div className='JAnimatedHeaderMenu' data-aos="fade-down">
                    <a className='JAnimatedBrand'><img src={Brand} alt='Brand' /></a>
                </div>

                <nav className='JAnimatedNav'>
                    <input type='checkbox' id='check' />
                    <label htmlFor='check' className='CVTCheckIcon'><i class="fas fa-bars"></i></label>


                    <div className='JAnimatedNavItem'> 
                        <a href='#' className='JAnimatedNavList'>Code shop</a>
                        <a href='#' className='JAnimatedNavList'>Portfolio</a>
                        <a href='#' className='JAnimatedNavList'>Resume</a>
                        <a href='#' className='JAnimatedNavList'>About</a>
                        <a href='#' className='JAnimatedNavList'>Blog</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

function SectionHeader () {
    return(
        <section className='JAnimatedSectHead'>
            <div className="JAnimatedSectContent">
                <video className='JAnimatedVideo' src={Background}autoPlay loop muted />
                <h1 className='JAnimatedSectHeading'>Squarespace <br /><span>Developer.</span></h1>
                <div className="JAnimatedHeadBtns">
                    <a className='JAnimatedBtns1'>HIRE ME TODAY</a>
                    <a className='JAnimatedBtns2'>WATCH VIDEO<i className="far fa-play-circle" /></a>
                </div>
            </div>
        </section>
    )
}

function Name(){
    // AOS.init({
    //     offset: 400,
    //     duration:1000
    // })
    return(
        <section className='JAnimatedProfile'>
              <div className='JAnimatedProfileCont' data-aos="fade-down">
                <h2 className='JAnimatedProfileTitlex'>Hi, I'm John square</h2>
                <p className='JAnimatedProfileText'>
                I'm a passionate business owners who truly love what i do. I built amazing websites for all your needs,with clients international. Check out my <em>Squarespace Project,</em> one of the best i like. I started my business because I honestly enjoy coming to work every day to create something beautiful that has the ability to impact others.
                </p>
              </div>
            </section>
    )
}

function Passion(){
    return(
        <section className='JAnimatedPassion'>
            <div className='JAnimatedPassContent'>
                <div className='JAnimatedPassImg' data-aos="fade-right">
                    <img src={Coffee} alt='' width='200px' height='300' />
                </div>
                <div className='JAnimatedPassSect'>
                    <h2 className='JAnimatedPassTitle' data-aos="fade-left">My passion and focus is Squarespace development</h2>
                    <p className='JAnimatedPassDes' data-aos="fade-left">Let's be honest and cut through the marketing fluff. You need a website that looks amazing and actually works. Bottom line, that's what I do. And if you want to learn more about working with me, pick up the phone and give me a call (or email).</p>
                </div>
            </div>
        </section>
    )
}

function Services(){
    return(
        <section className='JAnimatedServices'>
            <div className='JAnimatedServContainer'>
                <h2 className="JAnimatedServTitle">I also provide high-quality Squarespace plugins, snippets, training and more.</h2>

                <div className='JAnimatedServContent'>
                    <div className='JAnimatedServColumn' data-aos="fade-right">
                        <h4 className='JAnimatedServHeader'>code snippets</h4>
                        <p className='JAnimatedServDescription'>These are exclusively made for Squarespace sites and will offer custom design options with easy to understand instructions.</p>
                    </div>

                    <div className='JAnimatedServColumn' data-aos="fade-up">
                        <h4 className='JAnimatedServHeader'>video training</h4>
                        <p className='JAnimatedServDescription'>The training will go over some great insights to help users understand how to get the most out of their Squarespace site.</p>
                    </div>

                    <div className='JAnimatedServColumn' data-aos="fade-left">
                        <h4 className='JAnimatedServHeader'>tips & tricks</h4>
                        <p className='JAnimatedServDescription'>Learn from my mistakes and let me show you how to accomplish unique sections of your Squarespace site that will impress.</p>
                    </div>
                </div>

                <div className='JAnimatedServBtn'>
                    <a href='#'>Squarespace code shop <i class="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
        </section>
    )
}

function Projects(){
    return(
        <section className='JAnimatedProjects'>
            <div className='JAnimatedProContainer' data-aos="fade-right">
                <h2 className='JAnimatedProTitle'>Squarespace projects.</h2>
                <p className='JAnimatedProDescrip'>Work with local, as well as, international clients has become an amazing opportunity that I don't take for granted. Take a look at my latest Squarespace projects that I’ve been busy working on.</p>

                <div className='JAnimatedProContent' data-aos="fade-left">
                    <div className="JAnimatedCard JAnimatedMiddle">
                        <div className="JAnimatedFrontCard">
                            <img src={CoffeeShop} />
                        </div>
                        <div className="JAnimatedBackCard">
                            <div class="JAnimateBackContent JAnimatedMiddle">
                                <p className='AnimateP1'>Coffee Shop & Roaster</p>
                                <p className='AnimateP2'>Elementry</p>
                                <a href='#' className='AnimateAnka'>view Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="JAnimatedCard JAnimatedMiddle">
                        <div className="JAnimatedFrontCard">
                            <img src={PhotoSquare} />
                        </div>
                        <div className="JAnimatedBackCard">
                            <div class="JAnimateBackContent JAnimatedMiddle">
                                <p className='AnimateP1'>Subscription Service</p>
                                <p className='AnimateP2'>Trial Notes</p>
                                <a href='#' className='AnimateAnka'>view Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="JAnimatedCard JAnimatedMiddle">
                        <div className="JAnimatedFrontCard">
                            <img src={WeddingDJ} />
                        </div>
                        <div className="JAnimatedBackCard">
                            <div class="JAnimateBackContent JAnimatedMiddle">
                            <p className='AnimateP1'>Personal Brand</p>
                                <p className='AnimateP2'>Jason KLock</p>
                                <a href='#' className='AnimateAnka'>view Project</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='JAnimatedProBtn'>
                    <a href='#'>More Squarespace Projects <i class="fas fa-long-arrow-alt-right"></i></a>
                </div>

            </div>
        </section>
    )
}

function About(){
    return(
        <section className='JAnimatedAbout'>
            <div className='JAnimatedAbtContent' data-aos="fade-down">
                <h2 className='JAnimatedAbtHead'>Understanding My Passion</h2>
                <p className='JAnimatedAbtDescript'>There's something to be said about working with passionate business owners that truly love what they do. I’m no different. I started my business because I honestly enjoy coming to work every day to create something beautiful that has the ability to impact others.</p>
                
                <div className='JAniLaptopPlayer'>
                    <figure className='JAnimatedFigure'>
                        <img src={Laptop} />
                        <iframe className='JAnimatedVideoPlayer' src={Developer} autoPlay muted alt='youtube vid'></iframe>
                    </figure>
                </div>

            </div>
        </section>
    )
}

function Office (){
    return(
        <section className='JAnimatedOffice'>
            <div className='JAnimatedOffContainer' data-aos="fade-up">
                <h5 className='JAnimatedOffTitle'>FULL-TIME SQUARESPACE DEVELOPER</h5>
                <p className='JAnimatedOffDescript'>Need help from a Squarespace expert? <br />Let’s discuss your needs in detail.</p>

                <div className='JAnimatedServBtn'>
                    <a href='#'>I'm here to help you <i class="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
        </section>
    )
}

function LifeDesign(){
    return(
        <section className='JAnimatedLifeDesign'>
            <div className='JAnimatedLifeContainer' data-aos="fade-right">
                <h2 className="JAnimatedLifeTitle">My life as a Squarespace designer.</h2>

                <div className='JAnimatedLifeContent'>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img1} alt='Image' width='220px' height='240px'/>
                    </div>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img2} alt='image' width='220px' height='240px'/>
                    </div>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img3} alt='image' width='220px' height='240px' />
                    </div>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img4} alt='image' width='220px' height='240px' />
                    </div>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img5} alt='image' width='220px' height='240px' />
                    </div>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img6} alt='image' width='220px' height='240px' />
                    </div>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img10} alt='image' width='220px' height='240px' />
                    </div>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img8} alt='image' width='220px' height='240px' />
                    </div>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img9} alt='image' width='220px' height='240px' />
                    </div>
                    <div className='JAnimatedLifeColumn'>
                        <img src={Img7} alt='image' width='220px' height='240px' />
                    </div>
                </div>

                <div className='JAnimatedProBtn'>
                    <a href='#'>More Squarespace Projects <i class="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
        </section>
    )
}

function BlogPost() {
    return(
        <section className='JAnimatedBlog'>
            <div  className='JAnimatedBlogPost' data-aos="fade-left">
                <h2 className='JAnimatedBlogTitle'>My latest blog posts</h2>
                <div className='JAnimatedVlogCon'>
                    <div className='JAnimatedBlogContent'>
                        <div className='JAnimatedContent'>
                            <img src={Vlog1} alt='' width='300px' height='400px' />
                            <h6 className='JAnimatedVlogHref'>Building Squar</h6>
                            <p className='JAnimatedBlogHref'>I started a vlog and here's why</p>
                        </div>
                    </div>

                    <div className='JAnimatedBlogContent'>
                        <div className='JAnimatedContent'>
                            <img src={Vlog2} alt='' width='300px' height='400px' />
                            <h6 className='JAnimatedVlogHref'>Business</h6>
                            <p className='JAnimatedBlogHref'>Introducing SQUAR</p>
                        </div>
                    </div>

                    <div className='JAnimatedBlogContent'>
                        <div className='JAnimatedContent'>
                            <img src={Vlog3} alt='' width='300px' height='400px' />
                            <h6 className='JAnimatedVlogHref'>Squarespace Code Shop</h6>
                            <p className='JAnimatedBlogHref'>Squarespace Plugins: Code Shop Expansions</p>
                        </div>
                    </div>
                </div>

                <div className='JAnimatedProBtn'>
                    <a href='#'>More Squarespace Projects <i class="fas fa-long-arrow-alt-right"></i></a>
                </div>

            </div>
        </section>
    )
}

function Footer(){
    return(
        <footer className='JAnimatedFooter'>
            <div className='JAnimatedFootContainer'>

                <div className='JAnimatedFootHead'>
                    <h3>Let me build the website you need.</h3>
                </div>

                <nav className='JAnimatedFootNav'>
                    <div className='JAnimatedFootItem'>
                        <a href='#' className='JAnimatedFootLink'>Home</a>
                        <a href='#' className='JAnimatedFootLink'>Code shop</a>
                        <a href='#' className='JAnimatedFootLink'>Portfolio</a>
                        <a href='#' className='JAnimatedFootLink'>About</a>
                        <a href='#' className='JAnimatedFootLink'>Resume</a>
                        <a href='#' className='JAnimatedFootLink'>Blog</a>
                        <a href='#' className='JAnimatedFootLink'>Press</a>
                        <a href='#' className='JAnimatedFootLink'>Contact</a>
                    </div>
                </nav>

                <div className='JAnimatedCopyRight'>
                    <p  className='JAnimatedCopy'>&copy; {new Date().getFullYear()} JALL Devon Stank. All rights reserved. Squarespace Developer & Founder of 
                        <a href='#'>&nbsp; SQUAR</a>
                    </p>
                    <p className='JAnimatedTerms'>
                        <a href='#'>Terms of Service</a>
                        <a href='#'>Return Policy</a>
                        <a href='#'>Privacy Policy</a>
                    </p>
                </div>

                <div className='JAnimatedSoicalIcons'>
                    <i class="fab fa-facebook icon" ></i>
                    <i class="fab fa-instagram icon" ></i>
                    <i class="fab fa-linkedin icon" ></i>
                    <i class="fab fa-youtube icon" ></i>
                    <i class="fas fa-envelope icon" ></i>
                </div>
            </div>
        </footer>
    )
}

export default CVAnimateJallow;
