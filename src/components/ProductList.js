import React, { Component } from 'react';
import ProductRow from './ProductRow';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_test_17836673c8ef939d955d255da8cc112a5560bf0a0cbca');

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }
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
            return <ProductRow key={product.id} image={product.media.source} name={product.name} description={product.description} price={product.price.formatted_with_symbol} />
          })
        }
      </div>
    );
  }
}

export default ProductList;
