import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '../styles/productCard.module.css';

function ProductCard(props) {
  const { name, price, urlImage, id } = props;
  const numberQuantity = 0;
  const [quantity, setQuantity] = useState(numberQuantity);

  return (
    <div className={ styles.productCard }>
      <div data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </div>
      <div data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace(/\./, ',') }
      </div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <div className={ styles.quantityCard }>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => setQuantity(quantity - 1) }
        >
          {' '}
          -
          {' '}

        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity < 0 ? 0 : quantity }
          className={ styles.inputQuantity }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => setQuantity(quantity + 1) }
        >
          {' '}
          +
          {' '}

        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  urlImage: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
};

export default ProductCard;
