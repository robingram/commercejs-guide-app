import React from 'react';
import CartProductRow from './CartProductRow';

const CartProductList = () => {
  const product = {
    id: 12345,
    media : {
      source: '',
    },
    name: 'Test Product',
    description: 'Test Product description',
    price: {
      formatted_with_symbol: '$9.99'
    }
  }

  return (
    <div className="container cart-products">
      <CartProductRow key={product.id} image={product.media.source} name={product.name} description={product.description} price={product.price.formatted_with_symbol} />
      <CartProductRow key={product.id} image={product.media.source} name={product.name} description={product.description} price={product.price.formatted_with_symbol} />
    </div>
  );
}

export default CartProductList;
