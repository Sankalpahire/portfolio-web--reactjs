import React from 'react';
import { Link } from 'react-router-dom';
import './contactme.css';
import face from '../../assets/face.jpg';
import logo from '../../assets/_-logos_transparent.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function ContactMe() {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema, // Correct placement
    onSubmit: (values , action) => {
      console.log(values);
      action.resetForm();
      window.alert('cool i got your message i will try to contact you ASAP!');

      console.log('Alert displayed');
    },
   
  });

  const { values , handleBlur, handleChange, handleSubmit } = formik;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container" style={{ paddingRight: '30px', marginTop: '30px' }}>
          <Link to="/" className="navbar-brand">
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
        <Link to="/"><img src={face} alt="" style={{ height: '200px', width: '200px' }} /></Link>
      </div>

      {/* Input form */}
      <div className="container-sm container-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="e.g. FirstName LastName"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="errors-message">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="errors-message">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" autoComplete="off" className="form-label">
              Message here
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              name="message"
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="errors-message">{formik.errors.message}</div>
            ) : null}
          </div>
          <div className="btn-position">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;

