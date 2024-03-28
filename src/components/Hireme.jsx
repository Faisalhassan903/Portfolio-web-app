// src/components/HireMe.js

import './Hireme.css';


function HireMe() {
  return (
    <div className="hire-me-container">
      <h1 className="title">Lets Work Together</h1>
      <p className="intro-text">Interested in working together? Please fill out the form with some details about your project, and I will reply as soon as possible.</p>
      <div className="form-container">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" rows="6" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      {/* Placeholder for additional content after the form */}
      <div className="additional-content">
        <p>Looking forward to hearing from you!</p>
      </div>
    </div>
  );
}

export default HireMe;
