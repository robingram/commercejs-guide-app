import React from 'react';

const CartProductRow = ({ image, name, description, price }) => {
  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={image} alt={name} height="50" />
      </div>
      <div className="col-md-8 product-detail">
        <h5>{name}</h5>
        <div dangerouslySetInnerHTML={{__html: description}}></div>
      </div>
      <div className="col-md-2 cart-product-count">
        {price}
      </div>
    </div>
  );
}

export default CartProductRow;
