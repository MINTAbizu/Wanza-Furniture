import React from 'react';
import '../../Componet/About/about.css';

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <h2>About Wanza Furniture</h2>
        <p>
          At <strong>Wanza Furniture</strong>, we believe your home deserves elegant, modern, and durable furniture 
          that matches your style. We design and manufacture a wide range of furniture — from cozy sofas 
          and stylish dining sets to functional office desks and chairs.
        </p>
        <p>
          With years of craftsmanship and attention to detail, we bring together quality materials 
          and timeless designs to create furniture that transforms your spaces into something special.
        </p>

        <div className="about-values">
          <div className="value-box">
            <h3>✨ Quality</h3>
            <p>Built to last using the finest materials.</p>
          </div>
          <div className="value-box">
            <h3>🎨 Design</h3>
            <p>Elegant, modern, and inspired by you.</p>
          </div>
          <div className="value-box">
            <h3>🌱 Sustainability</h3>
            <p>Committed to eco-friendly practices in every step.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
