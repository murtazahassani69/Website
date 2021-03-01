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
        <h1 className="CVYusufTemp2-div-h">John Doe</h1>
      <span className="subtitle">Full stack Developer &amp; instructor</span>
    </header>
<section className="main-block">
  <h2 className="CVYusufTemp2-div-h">
    <i className="fa fa-suitcase"></i> Experiences
  </h2>
  <section className="blocks">
    <div className="date">
      <span>2015</span><span>present</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">Some Position</h3>
        <span className="place">Some Workplace</span>
        <span className="location">(remote)</span>
      </header>
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor</li>
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
        <h3 className="CVYusufTemp2-div-h">Another Position</h3>
        <span className="place">Some Workplace</span>
        <span className="location">Some City, Some Country</span>
      </header>
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
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
    <i className="fa fa-folder-open"></i> Selected Projects
  </h2>
  <section className="blocks">
    <div className="date">
      <span>2015</span><span>2016</span>
    </div>
    <div className="decorator">
    </div>
    <div className="details">
      <header>
        <h3 className="CVYusufTemp2-div-h">Some Project 1</h3>
        <span className="place">Some workplace</span>
      </header>
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
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
        <h3 className="CVYusufTemp2-div-h">Some Project 2</h3>
        <span className="place">Some workplace</span>
      </header>
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor</li>
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
        <h3 className="CVYusufTemp2-div-h">Ph.D. in Forty-Two Discovery</h3>
        <span className="place">Inexistent University</span>
        <span className="location">Some City, Some Country</span>
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
        <span className="place">Inexistent University</span>
        <span className="location">Some City, Some Country</span>
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
          <li>Introduction to something else</li>
          <li>Introduction to some more useless things</li>
          <li>Philosophy in practice</li>
          <li>Recursive research and its impact on recursive research</li>
          <li>Artificial politics</li>
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
    <li><i className="fab fa-linkedin-in"></i>&nbsp; linkedin.com/in/john</li>
    <li><i className="fa fa-envelope"></i>&nbsp; me@johndoe.gtld</li>
    <li><i className="fa fa-phone"></i> &nbsp;800.000.0000</li>
  </ul>
</div>
<div className="side-block" id="skills">
  <h1>
    Skills
  </h1>
  <ul>
    <li>&ndash;Omnipresence</li>
    <li>Anonymity</li>
  </ul>
  <ul>
    <li>&ndash;Ordinarity</li>
    <li>No name rights</li>
  </ul>
</div>
 
</section>
</div>
</>
    )
}
export default CVYusufTemplate2;