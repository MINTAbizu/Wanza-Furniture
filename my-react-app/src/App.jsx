import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componet/header/Header';
import Home from './Componet/home/Home';
import Timelessproduct from './Componet/Timeless/Timelessproduct';
import Products from './Componet/Products/Products';
import About from './Componet/About/About';
import Project from './Componet/Projects/Project';
import UserDesign from './Componet/UserDesign/UserDesign';
import Guidance from './Componet/Guiddance/Guidance';
import Footer from './Componet/footer/Footer';
import AutoScrollLogos from './Componet/AutoScrollLogos/AutoScrollLogos';
import Landpage from './Componet/Landpage';

function App() {
  return (
    <Router>
      <Header /> {/* Header stays at top for navigation */}
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/timeless" element={<Timelessproduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/UserDesign" element={<UserDesign />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/clients" element={<AutoScrollLogos />} />
      </Routes>
      <Footer /> {/* Footer stays at bottom */}
    </Router>
  );
}

export default App;
