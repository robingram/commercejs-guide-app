import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container">
      <Nav />
      <div className="container">
        <h2>Products</h2>
      </div>
      <ProductList />
    </div>
  );
}

export default App;
