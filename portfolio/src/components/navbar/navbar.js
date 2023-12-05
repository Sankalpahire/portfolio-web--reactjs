import React from 'react'
import './navbar.css'
import logo from '../../assets/_-logos_transparent.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container" style={{ paddingRight: '30px', marginTop: '30px' }}>
        <Link className="navbar-brand" to="/Home">
        <img src={logo} alt="logo" width="170px"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active download-cv" aria-current="page" download href="\portfolio\src\assets\sankalp ahire resume.pdf" style={{ marginRight: '20px' }}>Download CV</a>
        </li>
        <li className="nav-item">
          <Link to="/contact_me" className="button-hello">Say Hello</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar