import React, { Component } from 'react';
import Commerce from '@chec/commerce.js';
import ProductRow from './ProductRow';
import CartContext from '../context/CartContext';

const commerce = new Commerce(process.env.REACT_APP_CJS_PUBLICKEY_TEST);

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }

    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(productId) {
    commerce.cart.add(productId, 1)
      .then(result => {
        this.context.setCart(result.cart);
        alert("Product added to cart");
      });
  }

  componentDidMount() {
    commerce.products.list().then((result) => {
      this.setState({ products: result.data });
    });
  }

  render() {
    return (
      <div className="container main-content">
        {
          this.state.products.map(product => {
            return <ProductRow key={product.id} product={product} addProduct={this.handleAddProduct} />
          })
        }
      </div>
    );
  }
}

ProductList.contextType = CartContext;

export default ProductList;
