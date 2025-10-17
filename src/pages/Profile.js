import React from 'react';

export default function Profile(){
  return (
    <section className="profile-page">
      <h2>Detailed Profile</h2>
      <p>This page contains a detailed professional profile, including work history, responsibilities, technologies, and accomplishments.</p>

      <div className="profile-details">
        <h3>Work Experience</h3>
        <ul>
          <li><strong>Delivery Partner</strong> — Large BFSI Account (4 years)</li>
          <li><strong>Program Manager</strong> — Large-scale transformations</li>
          <li><strong>Senior Consultant</strong> — SDLC, QA, Transition & Maintenance</li>
        </ul>

        <h3>Technical Skills</h3>
        <p>React, JavaScript, Node.js, SQL, Cloud Platforms, Performance Tuning, Automation, DevOps practices.</p>

        <h3>Selected Accomplishments</h3>
        <ul>
          <li>Led multi-team delivery for complex banking transformation.</li>
          <li>Reduced production incidents by implementing robust QA pipelines.</li>
          <li>Designed solution architecture for high-availability services.</li>
        </ul>
      </div>
    </section>
  )
}
