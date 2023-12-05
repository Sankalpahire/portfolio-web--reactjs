import React from 'react';
import { Link } from 'react-router-dom';
import './contactme.css';
import face from '../../assets/face.jpg';
import logo from '../../assets/_-logos_transparent.png';
import { useFormik } from 'formik';

function ContactMe() {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });
  
  console.log(formik);
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container" style={{ paddingRight: '30px', marginTop: '30px' }}>
          <Link to="/home" className="navbar-brand">
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
                <Link to="/clear_field" className="button-clear">
                  Clear field <i className="fa-solid fa-x"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Head logo */}
      <div className="head-logo" style={{ textAlign: 'center', height: '200px', width: '200px', margin: 'auto' }}>
        <Link to="/home"><img src={face} alt="" style={{ height: '200px', width: '200px' }} /></Link>
      </div>

      {/* Input form */}
      <div className="container-sm container-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input type="text" autoComplete="off" className="form-control" id="exampleFormControlInput1" placeholder="e.g. FirstName LastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" autoComplete="off" className="form-label">
            Message here
          </label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="btn-position">
          <button className="button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
