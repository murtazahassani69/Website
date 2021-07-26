import React from 'react';
import '../../../../css/CVBaldeTemplateCentral.css';


function BlueBloc({title, text, height}) {
    return(
        <div className="CVBaldeTemp-div-blue" style={{height: `${height}`}}>
              <div className="CVBaldeTemp-div-blue1">
                <div className="CVBaldeTemp-div-blue2">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
              </div>
        </div>
    )
}

function Introduce() {
    return (
          <BlueBloc title="Hi, I’m Matt. Nice to meet you."  height='75vh'
                text=" Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, 
                and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, 
                naturally curious, and perpetually working on improving my chops one design problem at a time."/>
    );
}
function Skills() {
    const column1Ul = ["Balsamiq Mockups", "Figma", "Invision", "Marvel", "Pen & Paper", "Sketch", "Webflow", "Zeplin"]
    const column2Ul = ["Atom", "Bitbucket", "Bootstrap", "Bulma", "Codekit", "Codepen", "Github", "Gitlab", "Terminal"]
    const column3Ul = ["5 years experience", "26 short courses", "42 bootcamps", "125+ students", "1,400+ mentor sessions", "60+ group critiques", "12,000+ comments"]
    return (
          <div className="CVBaldeTemp-div-skills">
              <div className="CVBaldeTemp-div-container">
                <SkillsColumn img="https://mattfarley.ca/img/icons/designer.svg" h="Designer" p1="I value simple content structure, clean design patterns, and thoughtful interactions." 
                    p2="Things I enjoy designing:" p3="UX, UI, Web, Mobile, Apps, Logos" p4="Design Tools:" column={column1Ul}/>
                <SkillsColumn img="https://mattfarley.ca/img/icons/frontend.svg" h="Front-end Developer" p1="I like to code things from scratch, and enjoy bringing ideas to life in the browser." 
                    p2="Languages I speak:" p3="HTML, Pug, Slim, CSS, Sass, Less" p4="Dev Tools:" column={column2Ul}/>
                <SkillsColumn img="https://mattfarley.ca/img/icons/mentor.svg" h="Mentor" p1="I genuinely care about people, and love helping fellow designers work on their craft." 
                    p2="Experiences I draw from:" p3="UX/UI, Product design, Freelancing" p4="Mentor Stats:" column={column3Ul}/>
              </div>
          </div>
    );
}
function SkillsColumn({img, h, p1, p2, p3, p4, column}){
    return(
        <div className="CVBaldeTemp-div-column">
            <div className="CVBaldeTemp-div-column-figure">
                <img src={img} alt="Picture"/>
            </div>    
            <h1>{h}</h1>       
            <p className="CVBaldeTemp-div-column-text">{p1}</p>
            <p className="CVBaldeTemp-div-column-title">{p2}</p>
            <p className="CVBaldeTemp-div-column-text">{p3}</p>
            <p className="CVBaldeTemp-div-column-title">{p4}</p>
            <ul  className="CVBaldeTemp-div-column-text">
                {
                    column.map((col, idx)=><li key={idx}>{col}</li>)
                }
            </ul>
        </div>
    )
}

function Work(){
    return(
            <div className="CVBaldeTemp-div-work">
                <h1>My Recent Work</h1>
                <p>
                    Here are a few design projects I've worked on recently. Want to see more?
                        <a href="#"> Email me</a>
                </p>
                <div className="CVBaldeTemp-div-work-pictures">
                    <div className="CVBaldeTemp-div-work-grid">
                        <WorkFigure src="https://mattfarley.ca/img/projects/wfdesignbuild.png" text="High-end, custom residential renovaters serving Fraser Valley homeowners."/>
                        <WorkFigure src="https://mattfarley.ca/img/projects/awg2020.png" text="Uniting First Nations culture and community through winter sports competition."/>
                        <WorkFigure src="https://mattfarley.ca/img/projects/chronicled.png" text="Blockchain pioneers bringing transparency, trust, and security to supply."/>
                        <WorkFigure src="https://mattfarley.ca/img/projects/glcsolutions.png" text="Business savvy tech experts helping forward thinking companies get things done."/>
                        <WorkFigure src="https://mattfarley.ca/img/projects/coupal.png" text="Vancouver's tower crane rental service and support leader since 1974."/>
                        <WorkFigure src="https://mattfarley.ca/img/projects/wedlerengineering.png" text="Results-oriented, responsive and flexible full service civil engineering firm."/>
                    </div>    
                </div>
                <div className="CVBaldeTemp-div-work-btn">
                    <div className="CVBaldeTemp-div-work-btn1">
                        <a href="#">
                            <span><i className="fab fa-dribbble"></i></span>
                            <span>See more on Dribble</span>
                        </a>
                    </div>
                </div>
            </div>
    )
}

function WorkFigure(props){
    return(
        <div className="CVBaldeTemp-div-work-figure">
            <img src={props.src} className='CVBaldeTemp-div-work-figure-img'  alt='Picture' />
            <div className='CVBaldeTemp-div-hover'>
                <p>{props.text}</p>
                <a href="#">
                    <span>Vist Website</span>
                    <span className="CVBaldeTemp-div-hover-click">{'>'}</span>
                </a>
            </div>
        </div>
    )
}

function Collaborations(){
    return(
        <div className="CVBaldeTemp-collabore">
            <div className="CVBaldeTemp-collabore-title">
                <h1>I'm proud to have collaborated with some awesome companies:</h1>
            </div>
            <div className="CVBaldeTemp-div-collabore">
                <div className="CVBaldeTemp-div-collabore-imgs">
                    <ColaPicture src="https://mattfarley.ca/img/logos/briteweb.svg" />
                    <ColaPicture src="https://mattfarley.ca/img/logos/goodkind.svg" />
                    <ColaPicture src="https://mattfarley.ca/img/logos/redstamp.svg" />
                    <ColaPicture src="https://mattfarley.ca/img/logos/domain7.svg" />
                    <ColaPicture src="https://mattfarley.ca/img/logos/designlab.png" />
                    <ColaPicture src="https://mattfarley.ca/img/logos/chronicled.svg" />
                    <ColaPicture src="https://mattfarley.ca/img/logos/bldrs.png" />
                    <ColaPicture src="https://mattfarley.ca/img/logos/serpmetrics.svg" />
                </div>
            </div>
        </div>
    )
}

function ColaPicture({src}){
    return(
        <div className="CVBaldeTemp-div-collabore-img">
            <img src={src} alt="Company logo"/>
        </div>
        
    )
}

function Projects(){
    return(
        <BlueBloc title="My Startup Projects"  height='65vh'
            text="I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries 
            and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own."
        />
    )
}

function Startup(){
    return(
        <div className="CVBaldeTemp-startup">
            <div className="CVBaldeTemp-div-startup">
                <div className="CVBaldeTemp-div-startup1">
                    <StartupBloc  src='https://mattfarley.ca/img/logos/kybercore.svg' faSpan='fas fa-tools' span='In development' 
                        p='Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.' />
                    <StartupBloc  src='https://mattfarley.ca/img/logos/houston.svg' faSpan='fas fa-tools' span='In development' 
                         p='Simple feedback and engagement tools for teams that want to build and ship winning products.' />
                    <StartupBloc  src='https://mattfarley.ca/img/logos/basin.svg' faSpan='' span='www.usebasin.com' 
                         p='A powerful, easy-to-configure form backend for designers and developers. No coding required.' />
                    <StartupBloc  src='https://mattfarley.ca/img/logos/ylbuilders.svg' faSpan='' span='www.ylbuilders.com' 
                        p='Beautifully simple websites for independent distributors of Young Living Essential Oils.' />
                    <StartupBloc src='https://mattfarley.ca/img/logos/userforge.svg' faSpan='' span='www.userforge.com' 
                        p='A collaborative tool for creating simple, effective user personas for design projects.' />
                    <StartupBloc src='https://mattfarley.ca/img/logos/dovetail.svg' faSpan='fas fa-sunset'
                        p='A space and member management solution for coworking communities both big and small.'  span='Shutdown in 2017' />
                </div>
                <div className="CVBaldeTemp-div-startup2">
                    <h2>Interested in collaborating or investing?</h2>
                    <p>I’m always open to discussing product design work or partnership opportunities.</p>
                    <a href='#'>Start a conversation</a>
                </div>
            </div>
        </div>
    )
}

function StartupBloc({src, p, faSpan, span}){
    return(
        <div className="CVBaldeTemp-startup-bloc">
            <div className="CVBaldeTemp-div-startup-bloc">
                <img src={src} alt="Picture"/>
            </div>    
            <p className="CVBaldeTemp-div-startup-bloc-text">{p}</p>
            <a href="#">
                <span><i className={faSpan}></i></span>
                <span>{span}</span>
            </a>
            
        </div>
    )
}

function Testimonials(){
    return(
        <div  className='CVBaldeTemp-testimonial'>
            <h1>Testimonials</h1>
            <p>People I've worked with have said some nice things...</p>
            <div className='CVBaldeTemp-div-testimonial'>
                <input type="radio" name="images" id="i1"  />
                <input type="radio" name="images" id="i2" />
                <div className='CVBaldeTemp-div-testimonial-shift' id="CVBaldeTemp-div-testimonial-shift-one">
                    <img src='https://mattfarley.ca/img/avatars/alvin.png' alt='Picture'></img>
                    <p>“Matt's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios 
                        and the collaborative friction that's needed to produce excellent work.”
                    </p>
                    <h4>Alvin Engler</h4>
                    <span>Sr. Systems Developer, Domain7</span>
                </div>
                <div className='CVBaldeTemp-div-testimonial-shift' id="CVBaldeTemp-div-testimonial-shift-two">
                    <img src='https://mattfarley.ca/img/avatars/pascal.png' alt='Picture'></img>
                    <p>“Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely 
                        the kind of designer you can trust with a project from start to finish.”
                    </p>
                    <h4>Pascal Tremblay</h4>
                    <span>Creative Lead, Good Kind</span>
                </div>

                <div className="CVBaldeTemp-div-testimonial-nav">
                    <label className="dots" id="dot1" htmlFor="i1"></label>
                    <label className="dots" id="dot2" htmlFor="i2"></label>
                </div>

            </div>
        </div>
    )
}

function Start(){
    return(
        <div className='CVBaldeTemp-start'>
            <div className='CVBaldeTemp-div-start'>
                <div className='CVBaldeTemp-div-start1'><h1>Start a project</h1></div>
                <div className='CVBaldeTemp-div-start1'><p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p></div>
                <div className='CVBaldeTemp-div-start1'><a href='#'>Lets do it</a></div>
            </div>
        </div>
    )
}

function Central() {
  return (
        <div className="CVBaldeTemp-div-central">
            <Introduce />
            <Skills />
            <Work />
            <Collaborations />
            <Projects />
            <Startup />
            <Testimonials />
            <Start />
        </div>
  );
}

export default Central;
