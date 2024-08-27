import React from 'react';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <h3>Tristar Housing and Developments Pvt. Ltd.</h3>
          <p>3, First Cross Street, West C.I.T Nagar, Nandhanam, Chennai – 600 035</p>
          <p>Ph: 91 – 44- 2431 2431, 2431 2323</p>
          <p>Email: info@tristarhousing.com</p>
          
          <div className="usa-contact">
            <h3>USA Contact</h3>
            <p>Ramasamy Jesuraj (JJ)</p>
            <p>JR Consulting Services, LLC</p>
            <p>4 Rome Drive, Westford, MA 01886</p>
            <p>Phone: 978 996 6324</p>
            <p>Email: rjesuraj@yahoo.com</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>We are excited to hear from you!</h2>
        <form>
          <label htmlFor="name">Your Name *:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email *:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
