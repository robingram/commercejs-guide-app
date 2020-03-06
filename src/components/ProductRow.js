import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ProductRow = ({ image, name, description, price }) => {
  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={image} alt={name} height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>{name}</h4>
        <div dangerouslySetInnerHTML={{__html: description}}></div>
      </div>
      <div className="col-md-2 product-price">
        <p>{price}</p>
        <Button color="success">
          <FontAwesomeIcon icon={faPlus} />
          <span className="icon-button-text-right">Add to cart</span>
        </Button>
      </div>
    </div>
  );
}

export default ProductRow;
