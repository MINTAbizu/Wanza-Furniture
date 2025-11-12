import React from 'react';
import './Projects.css';
import sofa from '../../assets/image/core-img/sofa.jpg';
import tabel from '../../assets/image/core-img/officetabel.jpg';
import dain from '../../assets/image/core-img/sofa.jpg';
import bed from '../../assets/image/core-img/sofa.jpg';

function Project() {
  const projectdata = [
    {
      name: 'Bed',
      image:bed,
    //   image: 'https://images.unsplash.com/photo-1616627562237-6eec08d2f74f?auto=format&fit=crop&w=800&q=80',
      description: 'Elegant wooden bed designed for comfort and durability.',
    },
    {
      name: 'Office Table',
      image: tabel,
      description: 'Modern office table with minimalistic design and strong build.',
    },
    {
      name: 'Large Sofa',
      image:sofa,
      description: 'Spacious and soft sofa perfect for your living room.',
    },
    {
      name: 'Dining Table',
      image:dain,
      description: 'Beautiful dining table that brings the family together.',
    },
  ];

  return (
    <div className="project-section">
      <div className="project-container">
        <div className="project-title">
          <h1>Explore Our Finest Projects</h1>
        </div>
        <div className="project-description">
          <p>
            Discover our latest furniture designs crafted with precision, quality materials, 
            and modern aesthetics. Each project reflects our commitment to excellence.
          </p>
        </div>

        <div className="project-list">
          {projectdata.map((p, i) => (
            <div key={i} className="project-item">
              <img src={p.image} alt={p.name} />
              <div className="project-overlay">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
