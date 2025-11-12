import React from 'react';
import './Products.css';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // ✅ icons

import tes from '../../assets/image/1731949033.jpg';
import Table from '../../assets/image/1731949059.jpg';
import lamba from '../../assets/image/1731949048.jpg';
import Dining from '../../assets/image/Dining Furniture1731756529.jpg';
import sofa from '../../assets/image/sofa1731948627.jpg';

function Products() {
  const productsdata = [
    { name: 'Chair', image: tes },
    { name: 'Table', image: Table },
    { name: 'Lamba', image: lamba },
    { name: 'Sofa', image: sofa },
    { name: 'Dining', image: Dining },
    { name: 'Lamba', image: lamba },
    { name: 'Sofa', image: sofa },
    { name: 'Dining', image: Dining },
  ];

  return (
    <div className="product-list">
      <div className="product-list-container">
        {productsdata.map((p, i) => (
          <div key={i} className="product-item">
            <img src={p.image} alt={p.name} />
            <div className="product-overlay">
              <h3>{p.name}</h3>
              <div className="product-icons">
                <FaShoppingCart className="icon cart-icon" title="Add to Cart" />
                <FaHeart className="icon fav-icon" title="Add to Favorites" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
