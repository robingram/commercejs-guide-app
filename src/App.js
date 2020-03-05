import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container">
      <Nav />
      <header className="header">
        <h1>My Products</h1>
      </header>
      <ProductList />
    </div>
  );
}

export default App;
