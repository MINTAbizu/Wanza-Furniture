import React from 'react';
import '../footer/footer.css';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Brand */}
        <div className="footer-col brand">
          <h2 className="footer-logo">Wanza Furniture</h2>
          <p className="footer-text">
            Bringing comfort and style to every space — modern, affordable, and locally crafted furniture.
          </p>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Instagram /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Guidance</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><Phone size={16}/> +251 900000000</li>
            <li><Mail size={16}/> info@wanzafurniture.com</li>
            <li><MapPin size={16}/> Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-col newsletter">
          <h3>Subscribe</h3>
          <p>Stay updated on our latest offers and furniture collections.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wanza Furniture. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
