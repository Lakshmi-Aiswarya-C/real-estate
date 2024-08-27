import React from 'react';

function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are a company dedicated to providing top-notch real estate services.</p>
      <p>Our vision is to be the leading real estate provider.</p>
      
      <div className="director-profile">
        <img src="/director.jpg" alt="Director" />
        <h2>Director</h2>
        <p>Our director has over 20 years of experience in the industry...</p>
      </div>
    </div>
  );
}

export default AboutUs;
