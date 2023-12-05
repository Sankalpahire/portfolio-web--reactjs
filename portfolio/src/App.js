import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from "./components/navbar/navbar";
import Intro from "./components/introduction/intro";
import Projects from "./components/projects/project";
import Skills from "./components/skills/skills";
import Certifications from "./components/certifications/certifications";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";
import ContactMe from "./components/contactme/contactme";
import CollabForm from "./components/collabform/collabform";
import ProjectForm from "./components/projectform/projectform";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={
            <>
            <Navbar />
            <Intro />
            <Projects />
            <Skills />
            <Certifications />
            <Testimonials />
            <Footer />
          </>} />
          <Route path="/Contact_me" element={<ContactMe />} />
          <Route path="/Project_form" element={<ProjectForm />} />
          <Route path="/collab_form" element={<CollabForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


