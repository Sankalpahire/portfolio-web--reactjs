import React from 'react'
import './footer.css'
import logo from '../../assets/_-logos_transparent.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
        <div className="start-project" >
        <div><h3 style={{ marginLeft: '20px' }}><b>Start a project</b></h3></div> 
        <div> <p>Interested in starting a new project together?<br/> Let's schedule a chat over coffee.</p></div>
        <div>  <Link to="/Project_form" className="start-project-btn"><i className="fa-regular fa-hand-back-fist" style={{ marginRight: '8px' }}></i> Let's do this </Link> </div>
   </div>
   
   <footer className="footer">
     <div className="container-footer">
       <div className="footer-logo"><img src={logo} alt=""/></div>
       <div className="footer-slogan">I don't just code;<br/>I craft experiences beyond pixels and programming logic</div>
       <div className="footer-icons">
         <div className="icons-row">
          <a href="https://github.com/Sankalpahire"><i className="fa-brands fa-github"></i></a> 
          <a href="https://www.linkedin.com/in/sankalp-ahire-315b30274/?originalSubdomain=in"><i className="fa-brands fa-linkedin-in"></i></a> 
          <a href="https://www.instagram.com/sankalp_clicks/?hl=en"><i className="fa-brands fa-instagram"></i></a> 
           <a href="#1"><i className="fa-brands fa-facebook"></i></a>
          <a href="mailto:sankalpahire2001@gmail.com"><i className="fa-regular fa-envelope"></i></a> 
         </div>
         <div className="design-inspiration">Design inspiration @mat farley</div>
       </div>
       <div className="credit1">code by ME</div>
     </div>
   </footer>
   </div>
  )
}

export default Footer