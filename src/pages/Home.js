import React from 'react';
import { Link } from 'react-router-dom';
import profilePlaceholder from '../assets/profile.jpg';

export default function Home(){
  return (
    <section className="home-hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Jolly Prasad</h1>
          <p className="lead">26 years of experience in the IT industry and 23 years in TCS. A seasoned Delivery Partner in large BFSI account for 4 years. Specialized in managing delivery for large accounts, managing large programs / portfolio teams involving multiple technologies, solution architecting areas. Associated with major Banking and Financial Services customer for more than 20 years in providing the complete SDLC services (Delivery management, Large Program management, Portiolio management, Transformation services, Application Development, Transition, Maintenance and Quality Engineering) in various roles at onsite and offshore. Enthusiast for the detail and result orientation when it comes to Technology and solutioning of various IT services. This site showcases articles, contact details, and selected work.</p>

          <div className="hero-actions">
            <Link to="/profile" className="btn secondary">View detailed Profile</Link>
            <Link to="/articles" className="btn primary">View Articles</Link>
            <Link to="/contact" className="btn outline">Contact Me</Link>
          </div>
        </div>

        <div className="hero-photo" aria-hidden>
          <img src={profilePlaceholder} alt="Profile placeholder" className="profile-photo" />
        </div>
      </div>

      <div className="about-section">
        <h2>About Me</h2>
        <p>As a Senior Consultant and Tech Enthusiast, I have a passion for leveraging technology to solve complex business challenges. My extensive experience in the IT industry has equipped me with a deep understanding of various technologies and their applications in real-world scenarios.</p>
      </div>
    </section>
  )
}
