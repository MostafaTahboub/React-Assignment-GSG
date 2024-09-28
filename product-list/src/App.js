import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

const App = () => {
  // Array of products (state)
  const [products] = useState([
    { name: 'Smartphone', category: 'electronics', price: 699 },
    { name: 'Laptop', category: 'electronics', price: 999 },
    { name: 'T-Shirt', category: 'clothing', price: 25 },
    { name: 'Jeans', category: 'clothing', price: 45 },
    { name: 'Sofa', category: 'furniture', price: 450 },
    { name: 'Dining Table', category: 'furniture', price: 650 }
  ]);

  // State to track the selected filter
  const [filter, setFilter] = useState('all');

  // Function to filter products by category
  const filteredProducts = filter === 'all'
    ? products
    : products.filter(product => product.category === filter);

  return (
    <div className="container">
      <h1>Product List</h1>

      {/* Filter buttons */}
      <div className="filter-section">
        <button className="filter-btn" onClick={() => setFilter('all')}>All</button>
        <button className="filter-btn" onClick={() => setFilter('electronics')}>Electronics</button>
        <button className="filter-btn" onClick={() => setFilter('clothing')}>Clothing</button>
        <button className="filter-btn" onClick={() => setFilter('furniture')}>Furniture</button>
      </div>

      {/* Pass filtered products to the ProductList component */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
