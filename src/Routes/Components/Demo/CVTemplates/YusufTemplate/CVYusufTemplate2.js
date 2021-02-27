import React,  {useState} from "react";
import "../../../../css/CVYusufTemplate2.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function CVYusufTemplate2 (){
  const [toggle, setToggle] = useState(false);

    return (
<>
         {/* <div id="CVYusufTemp2-div-page-container"> */}

      <header className={toggle ?'nav-open':null} id="CVYusufTemp-div-menu-header">

{/* <div className="CVYusufTemp2-div-menu-logo-container">
  <img id="header-img" . src="logo.png" alt="logo"">
  <h4 className=" CVYusufTemp2-div-menu-logo">Logo Name</h4>
</div> */}

<button className="nav-toggle" onClick={()=>{setToggle(!toggle)}} aria-label="toggle navigation">
  <span className="hamburger"></span>
</button>

    <nav id="CVYusufTemp-div-nav-bar">
      <ul className="CVYusufTemp-div-menu-nav-links">
        <li><a className="CVYusufTemp-div-menu-nav-link" href="#">Home</a></li>
        <li><a className="CVYusufTemp-div-menu-nav-link" href="#">Services</a></li>
        <li><a className="CVYusufTemp-div-menu-nav-link" href="#">About</a></li>
      </ul>
    </nav>
</header>

<Pdf targetRef={ref} filename="resume.pdf">
        {({ toPdf }) => <button id="cmd" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>

{/* --------------container part----------------- */}
<div className="CVYusufTemp2-div-page-container" id="toPrint" ref={ref}>
  <section id="main">
    <header id="title">
        <h1 className="CVYusufTemp2-div-h">Josef Kara</h1>
      <span className="subtitle">Full stack Developer &amp; instructor</span>
    </header>
<section className="main-block">
  <h2 className="CVYusufTemp2-div-h">
    <i className="fa fa-suitcase"></i> Experiences
  </h2>
  <section className="blocks">
    <div className="date">
      <span>2020</span><span>present</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">Web Developer</h3>
        <span className="place">Amnick Enterprise Solution</span>
        <span className="location">Athens</span>
      </header>
      <div>
        <ul>
          <li>Web design and hosting</li>
          <li>Web designers plan, create and code internet sites and web pages, 
            many of which combine text with sounds, pictures, graphics and video clips.
             A web designer is responsible for creating the design and layout of a website or web pages.
              It and can mean working on a brand new website or updating an already existing site.</li>
        </ul>
        </div>
    </div>
  </section>
  <section className="blocks">
    <div className="date">
      <span>2015</span><span>2020</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h"> IT Engineer</h3>
        <span className="place">IT support</span>
        <span className="location">Athens, Greece</span>
      </header>
      <div>
        <ul>
          <li>Job is monitors and maintains computer systems and networks.</li>
          <li> It is a part of their job to identify, diagnose and rectify any issues in computer hardware, software, services, and applications.</li>
          <li>Assessing Customer Support Needs.</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="blocks">
    <div className="date">
      <span>2013</span><span>2014</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">Yet Another Job Position</h3>
        <span className="place">Some Workplace</span>
        <span className="location">Some City, Some Country</span>
      </header>
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        </ul>
        </div>
    </div>
  </section>
</section>
<section className="main-block">
  <h2 className="CVYusufTemp2-div-h">
    <i className="fa fa-folder-open"></i> Software Development Projects
  </h2>
  <section className="blocks">
    <div className="date">
      <span>2015</span><span>2016</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">ChalleduApp</h3>
        <span className="place">NGO Web page</span>
      </header>
      <div>
        <ul>
          <li>This web application is a prototype platform that will allow the
registration of users as NGO representatives and independent
mentors and the creation of profiles for NGOs and the users
themselves.</li>
          <li>Each registered user will be able to see a list of all NGO
profiles and user profiles, whereas administrator users will be able to
approve registrations and created profiles before publishing on the
platform, and also edit and delete them via an exclusive menu
available only to them.</li>
          <li>It coded with react and mongo DB</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="blocks">
    <div className="date">
      <span>2014</span><span>2015</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">Issue Tracker</h3>
        <span className="place">every project</span>
      </header>
      <div>
        <ul>
          <li>Target of the project is to develop a web-based issue tracker.</li>
          <li>backend: backend of the application</li>
          <li>web: web based frontend of the application</li>
          <li>mobile: mobile fontend of the application</li>
          <li>test: end-to-end tests for the application</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="blocks">
    <div className="date">
      <span>2014</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">Some Project 3</h3>
        <span className="place">Some workplace</span>
      </header>
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
        </ul>
      </div>
    </div>
  </section>
</section>
<section className="main-block concise">
  <h2 className="CVYusufTemp2-div-h">
    <i className="fa fa-graduation-cap"></i> Education
  </h2>
  <section className="blocks">
    <div className="date">
      <span>2009</span><span>2014</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">Ph.D. in Data Science Discovery</h3>
        <span className="place">Harvard University</span>
        <span className="location">Cambridge, Massachusetts</span>
      </header>
      <div>Relationship of the number with the answer to life, the universe and everything</div>
    </div>
  </section>
  <section className="blocks">
    <div className="date">
      <span>2005</span><span>2009</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">LL.B. in H&aelig;matophagic Economics</h3>
        <span className="place">Ontario Tech University</span>
        <span className="location">Oshawa, ON</span>
      </header>
      <div>President's Scholarship</div>
    </div>
  </section>
  <section className="blocks">
    <div className="date">
      <span>2005</span><span>2009</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">B.S. in Existential Science (Double Major)</h3>
        <span className="place">Inexistent University</span>
        <span className="location">Some City, Some Country</span>
      </header>
      <div>President's Scholarship</div>
    </div>
  </section>
  <section className="blocks">
    <div className="date">
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">Massive Online Fee&ndash;Required Course (selective list)</h3>
      </header>
      <div className="concise">
        <ul>
          <li> Full-Stack Development
              Social Hackers Academy, Athens, Greece</li>
          <li> Python Programming Language 
              Online course offered by Coursera</li>
          <li> Introduction to Project Management
                Odyssea Association, Athens, Greece</li>
          <li> IT Networking Essentials
              University of North America, Texas, USA</li>
        </ul>
      </div>
    </div>
  </section>
</section>
</section>
<section id="sidebar">
<div className="side-block" id="contact">
  <h1 className="CVYusufTemp2-div-h">
    Contact Info
  </h1>
  <ul>
    <li><i className="fa fa-globe"></i>&nbsp; johndoe.gtld</li>
    <li><i className="fab fa-linkedin-in"></i>&nbsp; linkedin.com/in/josef</li>
    <li><i className="fa fa-envelope"></i>&nbsp; me@josefkara.gtld</li>
    <li><i className="fa fa-phone"></i> &nbsp;800.000.0000</li>
  </ul>
</div>
<div className="side-block" id="skills">
  <h1>
    Skills
  </h1>
  <ul>
    <li>Object-Oriented Programming(OOP)</li>
    <li>Java</li>
  </ul>
  <ul>
    <li>Agila Methodologies</li>
    <li>Test Automation</li>
  </ul>
</div>
 
</section>
</div>
</>
    )
}
export default CVYusufTemplate2;