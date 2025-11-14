import React from 'react';
import '../Guiddance/guidance.css';

function Guidance() {
  return (
    <section className="guidance-section">
      <div className="guidance-container">
        {/* Left Side */}
        <div className="guidance-left">
          <h1>Get Expert Guidance <br /> for your Space</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur itaque iusto, earum repellendus ad doloremque?
            Error reiciendis quod.
          </p>

          <div className="phone">
            <span className="phone-icon">📞</span>
            <span className="phone-number">+251 900000000</span>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="guidance-right">
          <form className="guidance-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Guidance;
