import React, { useContext } from 'react';
import CartProductList from './CartProductList';
import CartContext from '../../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <CartProductList cart={cart} />
  );
}

export default Cart;
