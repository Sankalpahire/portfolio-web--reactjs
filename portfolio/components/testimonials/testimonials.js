import React from 'react'
import './testimonials.css'
import avatar from '../../assets/avatar.jpg';

function testimonials() {
  return (
    <div>
    <section className="testimonial-section">
      <div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="testimonial">
                      <img src={avatar} alt="Client 1" />
                      <p className="testimonial-text">"I'm extremely satisfied with the quality of work. The team exceeded my expectations!"</p>
                      <p className="testimonial-author">- John Doe, CEO of Company A</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <div className="testimonial">
                      <img src={avatar} alt="Client 2" />
                      <p className="testimonial-text">"Working with them was a breeze. They delivered on time and within budget."</p>
                      <p className="testimonial-author">- Jane Smith, CTO of Company B</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <div className="testimonial">
                      <img src={avatar} alt="Client 3" />
                      <p className="testimonial-text">"Highly professional and responsive. I highly recommend their services!"</p>
                      <p className="testimonial-author">- Mark Johnson, Founder of Company C</p>
                  </div>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="false"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div>
    </section>
    </div>
  )
}

export default testimonials