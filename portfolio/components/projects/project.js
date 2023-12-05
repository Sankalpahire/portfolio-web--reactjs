import React from 'react'
import './project.css';
import buildhubImage from '../../assets/project card 1.jpg';
import ticTacToeImage from '../../assets/tic-tac-toe.jpg';
import teslaImage from '../../assets/tesla.jpg';
import moneybankImage from '../../assets/moneybank.in.jpg';
import textOVertImage from '../../assets/text-o-vert.jpg';
import keertiCloneImage from '../../assets/keerti clone.jpg';

const Projects = () => {
  return (
    <>
  <div className="container-fluid project-section">
  <div className="project-content">
    <h1 className="project-head">My Projects.</h1>
    <p className="project-para">Here are a few past projects I've worked on. Want to see more? <span style={{ color: '#6e07f3' }}><a href="mailto:sankalpahire2001@gmail.com" style={{ textDecoration: 'none' }}>Email Me!</a></span></p>
  </div>
</div>

      {/* Project cards */}
      <div className="project-card-container">
        {/* Project Card 1 */}
        <div className="project-card">
          <img src={buildhubImage} alt="Card 1" />
          <div className="description">
            <p>
              A construction firm landing page made with various Bootstrap 5 templates
              with carousels, cards, and a responsive navbar.
            </p>
            <a href="https://buildhub-sankalpahire.netlify.app/" className="button-hello">
              Visit Website
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card">
          <img src={ticTacToeImage} alt="Card 2"  />
          <div className="description">
            <p>
              Revitalize classic gaming with our JavaScript-powered Tic-Tac-Toe Game. Enjoy
              strategic battles, responsive design, and a nostalgic twist in this reinvented
              classic.
            </p>
            <a href="https://buildhub-sankalpahire.netlify.app/" className="button-hello">
              Visit Website
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card">
          <img src={teslaImage} alt="Card 3" />
          <div className="description">
            <p>
              Tesla Landing Page project. This educational endeavor delves into HTML and CSS
              offering insights into crafting a sleek and modern website.
            </p>
            <a href="https://buildhub-sankalpahire.netlify.app/" className="button-hello">
              Visit Website
            </a>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="project-card">
          <img src={moneybankImage} alt="Card 4" />
          <div className="description">
            <p>
              MoneyBank.in - a fintech website offering diverse, meticulously crafted webpage
              layouts that showcase responsive design. 
            </p>
            <a href="https://buildhub-sankalpahire.netlify.app/" className="button-hello">
              Visit Website
            </a>
          </div>
        </div>

        {/* Project Card 5 */}
        <div className="project-card">
          <img src={textOVertImage} alt="Card 5" />
          <div className="description">
            <p>
              A construction firm landing page made with various Bootstrap 5 templates with
              carousels, cards, and a responsive navbar.
            </p>
            <a href="https://buildhub-sankalpahire.netlify.app/" className="button-hello">
              Visit Website
            </a>
          </div>
        </div>

        {/* Project Card 6 */}
        <div className="project-card">
          <img src={keertiCloneImage} alt="Card 6" />
          <div className="description">
            <p>
              A construction firm landing page made with various Bootstrap 5 templates with
              carousels, cards, and a responsive navbar.
            </p>
            <a href="https://buildhub-sankalpahire.netlify.app/" className="button-hello">
              Visit Website
            </a>
          </div>
        </div>
      </div>

      {/* View more link */}
      <div className="container">
        <a className="view-more" style={{ color: '#6e07f3' }} href="#a">
          View more
        </a>
      </div>

      {/* Big button section */}
      <div className="container-bigbutton">
        <a
          href="https://www.linkedin.com/in/sankalp-ahire-315b30274/?originalSubdomain=in"
          className="bigbutton"
        >
          <i className="fa-brands fa-linkedin-in" > </i> Visit LinkedIn
        </a>
      </div>
    </>
  );
};



export default Projects;