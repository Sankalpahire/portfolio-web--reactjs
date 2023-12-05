import React from 'react'
import './intro.css'
import '@fortawesome/fontawesome-free/css/all.css';
import face from '../../assets/face.jpg'
import heroimg from '../../assets/hero-devices.svg'



const Intro = () => {
  return (
        <div className="container-main">
          <h1 className="heading">
            <b>I’m <span>SANKALP AHIRE</span>, a MERN stack developer</b>
          </h1>
          <p>who loves to create awesome web applications. See my work and get in touch.</p>
    
          <div style={{ textAlign: 'center' }}>
            <img src={face} alt="" style={{ height: '300px', width: '300px' }} />
          </div>
    
          <div style={{ textAlign: 'center' }}>
            <img src={heroimg} className="img-fluid" alt="" style={{ height: '348px', width: '860px', marginTop: '43px' }} />
          </div>
    
          {/* Introduction */}
          <div className="container-intro">
            <div>
              <h1 className="intro-heading"><b>Hello, Nice to meet you here!</b></h1>
            </div>
            <div>
              <p className="heading-para">
                I'm excited to introduce myself as I embark on my journey in web development. Recently,
                <br />I made the choice to specialize as an MERN stack developer, and I must say, I'm thoroughly enjoying every step of this fascinating process.
                <br />
                As I continue to hone my skills and expand my knowledge, I've started building web projects that reflect my passion and dedication to this field.
                <br />
                I'd love for you to take a look at some of these projects; they're a testament to my commitment and creativity.
                <br />
                If you're in search of a freelance web developer for your projects or if you happen to come across any potential clients or opportunities, please don't hesitate to reach out.
                <br />
                I'm eager to collaborate and contribute to your web development endeavors.
                <br />
                Whether you require an extra pair of hands on your team or just some friendly advice, I'm here to help.
                <br />
                Let's connect, share ideas, and create amazing web experiences together.
                <br />Thank you for taking the time to get to know me, and I look forward to the exciting possibilities that lie ahead.
              </p>
            </div>
          </div>
    
          {/* Introduction Cards */}
          <div className="card-container1">
            <div className="card">
              <div className="circle"><i className="fas fa-desktop"></i></div>
              <div className="card-body">
                <h5 className="card-title">Designer</h5>
                <p className="card-text">I create simple & subtle web designs </p>
                <p className="card-text" style={{ color: '#6e07f3' }}>Things I enjoy designing:</p>
                <h6>web, user interface (UI), Logo</h6>
                <p className="card-text" style={{ color: '#6e07f3' }}>Design Tools:</p>
                <ul>
                  <li>Adobe photoshop cc</li>
                  <li>adobe illustrator</li>
                  <li>Fonts awesome</li>
                  <li>pen & paper</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="circle"><i className="fas fa-code"></i></div>
              <div className="card-body">
                <h5 className="card-title">Full Stack Developer</h5>
                <p className="card-text">I like to code things from scratch and also like to put it in your browser</p>
                <p className="card-text" style={{ color: '#6e07f3' }}>things I can code:</p>
                <h6>HTML, CSS, JAVASCRIPT, REACT JS, NODE JS</h6>
                <p className="card-text" style={{ color: '#6e07f3' }}>Dev Tools:</p>
                <ul>
                  <li>BOOTSTRAP 5</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Google developer tools</li>
                  <li>Terminal</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="circle"><i className="fas fa-camera"></i></div>
              <div className="card-body">
                <h5 className="card-title">Photography (side hustle)</h5>
                <p className="card-text">I click portrait sometimes</p>
                <p className="card-text" style={{ color: '#6e07f3' }}>Genres I prefer:</p>
                <h6>macro, portrait, creative, street, wedding, cinematics</h6>
                <p className="card-text" style={{ color: '#6e07f3' }}>Design Tools:</p>
                <ul>
                  <li>Adobe photoshop cc</li>
                  <li>Adobe illustrator</li>
                  <li>Adobe lightroom cc</li>
                  <li>Adobe premier pro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default Intro;
    