import React from 'react';
import './Projects.css';
import sofa from '../../assets/image/sofa1731948627.jpg';
function Project() {
  const projectdata = [
    {
      name: 'Bed',
      image:sofa,
    //   image: 'https://images.unsplash.com/photo-1616627562237-6eec08d2f74f?auto=format&fit=crop&w=800&q=80',
      description: 'Elegant wooden bed designed for comfort and durability.',
    },
    {
      name: 'Office Table',
      image: 'https://images.unsplash.com/photo-1598300053650-8d2a9b7ab253?auto=format&fit=crop&w=800&q=80',
      description: 'Modern office table with minimalistic design and strong build.',
    },
    {
      name: 'Large Sofa',
      image: 'https://images.unsplash.com/photo-1616627459505-4d6e4fdd8cf1?auto=format&fit=crop&w=800&q=80',
      description: 'Spacious and soft sofa perfect for your living room.',
    },
    {
      name: 'Dining Table',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a8b88?auto=format&fit=crop&w=800&q=80',
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
