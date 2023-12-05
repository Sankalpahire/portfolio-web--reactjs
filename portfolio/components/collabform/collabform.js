import React from 'react'
import './collabform.css'
import { Link } from 'react-router-dom'
import face from '../../assets/face.jpg';
import logo from '../../assets/_-logos_transparent.png';

function collab_form() {
  return (
        <div>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container" style={{ paddingRight: '30px', marginTop: '30px' }}>
              <Link className="navbar-brand" to={"/home"}>
                <img src={logo} alt="" width="170px" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="./say_hello.html" className="button-clear">
                      Clear field <i className="fa-solid fa-x"></i>{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
          {/* Head logo */}
          <div className="head-logo">
            <Link to={"/home"}>
             <img src={face} alt="" />
            </Link>
            
          </div>
    
          {/* Heading */}
          <div className="container-fluid heading">
            <b>
              <h1>
                "Exploring collaboration, startup projects, or extra support?
                <br /> Let's connect professionally."
              </h1>
            </b>
          </div>
    
          {/* Input form */}
          <div className="container-form">
            <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input type="text" className="form-control" id="validationCustom01" placeholder="First Name" required />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input type="text" className="form-control" id="validationCustom02" placeholder="Last Name" required />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-12">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label">
                  Project
                </label>
                <select className="form-select" id="validationCustom04" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option>...</option>
                </select>
                <div className="invalid-feedback">Please select a valid state.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom05" className="form-label">
                  Role
                </label>
                <select className="form-select" id="validationCustom05" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option>...</option>
                </select>
                <div className="invalid-feedback">Please select a valid state.</div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Save details for future references.
                  </label>
                  <div className="invalid-feedback">You must agree before submitting.</div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button className="button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    
export default collab_form