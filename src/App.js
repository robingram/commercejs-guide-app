import React, { useEffect, useState } from 'react';
import Commerce from '@chec/commerce.js';
import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import CartContext from './context/CartContext';

function App() {
  const commerce = new Commerce(process.env.REACT_APP_CJS_PUBLICKEY_TEST);
  const [cart, setCart] = useState();

  useEffect(() => {
    commerce.cart.retrieve()
      .then(cart => {
        setCart(cart);
      })
  }, [])

  return (
    <div className="container">
      <CartContext.Provider value={{cart, setCart}}>
        <Nav />
        <div className="container">
          <h2>Products</h2>
        </div>
        <ProductList />
      </CartContext.Provider>
    </div>
  );
}

export default App;
