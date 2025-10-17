import React from 'react';
import { Link } from 'react-router-dom';
import profilePlaceholder from '../assets/profile.jpg';

export default function Home(){
  return (
    <section className="home-hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Jolly Prasad</h1>
          <p className="lead">26 Years of extensive experience spanning IT delivery, program management, and client relationship management, especially within BFSI sector. This site showcases articles, contact details, and selected work.</p>

          <div className="hero-actions">
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
        <p>My core expertise lies in the BFSI domain where I manage delivery of large relationships and programs.

I have an avid interest in learning and exploring new technologies continuously to stay updated and deliver value.</p>
      </div>
    </section>
  )
}
