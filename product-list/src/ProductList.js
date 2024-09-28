import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="product-item">
            <h2>{product.name}</h2>
            <p>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <span>${product.price}</span>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
