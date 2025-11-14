import React, { useState } from 'react';
import '../header/Header.css';
import { FaBars, FaTimes, FaShoppingCart, FaHeart } from 'react-icons/fa';
import logo1 from "../../assets/image/core-img/logo.png"
// import { Link } from 'lucide-react';
import { Link } from 'react-router';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo"><img src=
      {logo1} alt="" /></div>

      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/projects'}>Projects</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/UserDesign"}>UserDesign</Link></li>
          <li><Link to={"/products"}>products</Link></li>
        </ul>
      </nav>

      <div className="header-icons">
        <FaHeart className="icon" title="Favorites" />
        <FaShoppingCart className="icon" title="Cart" />
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;
