import React from 'react';
import './Products.css';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

// sample images
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
    <div className="container my-5">
      <div className="row g-3">
        {productsdata.map((p, i) => (
          <div key={i} className="col-12 col-sm-6 col-lg-3">
            {/* col-12 ✅ = 1 item on mobile
                col-sm-6 ✅ = 2 items on tablet
                col-lg-3 ✅ = 4 items on desktop */}
            <div className="product-item position-relative overflow-hidden rounded shadow-sm">
              <img src={p.image} alt={p.name} className="img-fluid w-100" />
              <div className="product-overlay d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-white mb-2">{p.name}</h5>
                <div className="product-icons d-flex gap-3">
                  <FaShoppingCart className="icon cart-icon" title="Add to Cart" />
                  <FaHeart className="icon fav-icon" title="Add to Favorites" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
