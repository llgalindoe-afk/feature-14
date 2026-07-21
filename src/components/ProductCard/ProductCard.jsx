import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card product-card-link">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <strong>{product.price.toFixed(2)} €</strong>
          <span className="text-link">Ver producto</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
