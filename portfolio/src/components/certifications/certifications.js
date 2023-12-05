import React from 'react';
import './certifications.css';
import keerti from '../../assets/keerti.png';
import tcs from '../../assets/tcs.png';
import letsupgrade from '../../assets/lets upgrade.png';
import {Link} from 'react-router-dom';


const Certification = ({ imgSrc, certificateName, certifyingOrg, collaborationOrg, dateOfCompletion, verificationLink }) => (
  <div className="certificate-card">
    <img src={imgSrc} alt="Certificate" />
    <h3>{certificateName}</h3>
    <p>
      Issued by: {certifyingOrg} <span className="collaboration">in collaboration with {collaborationOrg}</span>
    </p>
    <p>Date of Completion: {dateOfCompletion}</p>
    <a href={verificationLink}>Verify Certificate</a>
  </div>
);

const Certifications = () => (
  <>
    {/* certifications */}
    <div className="container-certification">
      <div>
        <h1 className="certification-heading">An Array of Certifications Accumulated Throughout My Journey</h1>
      </div>
      <div>
        <p className="certification-para">
          "Each certification I've obtained represents a milestone in my continuous learning journey. <br />
          These achievements showcase my commitment to staying updated with the latest technologies and industry
          standards,<br /> enhancing my skills and expertise in web development."
        </p>
      </div>
    </div>

    <div className="container-certificate-cards">
        <Certification
            imgSrc={keerti}
            certificateName="Certificate Name"
            certifyingOrg="Certifying Organization"
            collaborationOrg="Collaborating Organization"
            dateOfCompletion="January 1, 20XX"
            verificationLink="verification-link"/>

        <Certification
        imgSrc={tcs}
            certificateName="Certificate Name"
            certifyingOrg="Certifying Organization"
            collaborationOrg="Collaborating Organization"
            dateOfCompletion="January 1, 20XX"
            verificationLink="verification-link"/>
        <Certification
            imgSrc={letsupgrade}
            certificateName="Certificate Name"
            certifyingOrg="Certifying Organization"
            collaborationOrg="Collaborating Organization"
            dateOfCompletion="January 1, 20XX"
            verificationLink="verification-link"/>
        <Certification
            imgSrc={letsupgrade}
            certificateName="Certificate Name"
            certifyingOrg="Certifying Organization"
            collaborationOrg="Collaborating Organization"
            dateOfCompletion="January 1, 20XX"
            verificationLink="verification-link"/>    
        <Certification
            imgSrc={letsupgrade}
            certificateName="Certificate Name"
            certifyingOrg="Certifying Organization"
            collaborationOrg="Collaborating Organization"
            dateOfCompletion="January 1, 20XX"
            verificationLink="verification-link"/>

        <Certification
            imgSrc={letsupgrade}
            certificateName="Certificate Name"
            certifyingOrg="Certifying Organization"
            collaborationOrg="Collaborating Organization"
            dateOfCompletion="January 1, 20XX"
            verificationLink="verification-link"/>
        <Certification
            imgSrc={letsupgrade}
            certificateName="Certificate Name"
            certifyingOrg="Certifying Organization"
            collaborationOrg="Collaborating Organization"
            dateOfCompletion="January 1, 20XX"
            verificationLink="verification-link"/>
        <Certification
            imgSrc={letsupgrade}
            certificateName="Certificate Name"
            certifyingOrg="Certifying Organization"
            collaborationOrg="Collaborating Organization"
            dateOfCompletion="January 1, 20XX"
            verificationLink="verification-link"/>        
    </div>

    {/* start a conversation section */}
    <div className="container-collab">
      <h4 className="collab-head">Let's Collaborate and Create Something Amazing Together!</h4>
      <p className="collab-para">
        I'm open to talking about potential product design projects or partnership opportunities in the web
        development world.
      </p>
      <Link to="/collab_form" className="start-conversation">
        <i className="fa-regular fa-message" style={{ marginRight: '8px' }}></i> Start Conversation
      </Link>
    </div>
  </>
);

export default Certifications;
