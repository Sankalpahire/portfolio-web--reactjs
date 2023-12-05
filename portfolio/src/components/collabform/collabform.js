import React from 'react';
import './collabform.css';
import { Link } from 'react-router-dom';
import face from '../../assets/face.jpg';
import logo from '../../assets/_-logos_transparent.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  project: Yup.string().required('Project is required'),
  role: Yup.string().required('Role is required'),
  // agreement: Yup.boolean().oneOf([true], 'You must agree before submitting'),
});

function CollabForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    project: '',
    role: '',
    agreement: false,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
     
      resetForm();

      window.alert('Cool! I got your message. I will try to contact you ASAP!');
    },
  });

 


  const { values, errors, touched, handleBlur, handleChange, handleSubmit , resetForm} = formik;

  return (
    <div>
      {/* Navbar */}
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
            <button onClick={resetForm} className="button-clear">
                  Clear field <i className="fa-solid fa-x"></i>
                </button>
            </ul>
          </div>
        </div>
      </nav>

      {/* Head logo */}
      <div className="head-logo">
        <Link to="/">
          <img src={face} alt="" />
        </Link>
      </div>

      {/* Heading */}
      <div className="container-fluid heading">
        <b>
          <h1>
            I'm enthusiastic about diving into your project.
            <br /> and collab with your team
          </h1>
        </b>
      </div>

      {/* Input form */}
      <div className="container-form">
        <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className={`form-control ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`}
              id="validationCustom01"
              placeholder="First Name"
              required
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="firstName"
            />
            {touched.firstName && errors.firstName ? (
              <div className="invalid-feedback">{errors.firstName}</div>
            ) : null}
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
              id="validationCustom02"
              placeholder="Last Name"
              required
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="lastName"
            />
            {touched.lastName && errors.lastName ? (
              <div className="invalid-feedback">{errors.lastName}</div>
            ) : null}
          </div>
          <div className="col-12">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
            />
            {touched.email && errors.email ? (
              <div className="invalid-feedback">{errors.email}</div>
            ) : null}
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom04" className="form-label">
              Project
            </label>
            <select
              className={`form-select ${touched.project && errors.project ? 'is-invalid' : ''}`}
              id="validationCustom04"
              value={values.project}
              onChange={handleChange}
              onBlur={handleBlur}
              name="project"
              required
            >
              <option disabled value="">
                Select...
              </option>
              <option>startup</option>
                <option>small bisiness website</option>
                <option>landing page</option>
                <option>wordpress website</option>
                <option>web application</option>  
                <option>other</option>
            </select>
            {touched.project && errors.project ? (
              <div className="invalid-feedback">{errors.project}</div>
            ) : null}
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom05" className="form-label">
              Role
            </label>
            <select
              className={`form-select ${touched.role && errors.role ? 'is-invalid' : ''}`}
              id="validationCustom05"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              name="role"
              required
            >
              <option disabled value="">
                Select...
              </option>
              <option>freelancing work</option>
                <option>team member</option>
                <option>friendly advice</option>
                <option>strategy building</option>
                <option>client work</option>
                <option>others</option>
            </select>
            {touched.role && errors.role ? (
              <div className="invalid-feedback">{errors.role}</div>
            ) : null}
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
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CollabForm;
