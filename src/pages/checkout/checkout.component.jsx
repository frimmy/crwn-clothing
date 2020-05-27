import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js';

import styles from './checkout.module.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total})  => (
  <div className={styles['checkout-page']}>
    <div className={styles["checkout-header"]}>
      <div className={styles["header-block"]}>
        <span>Product</span>
      </div>
      <div className={styles["header-block"]}>
        <span>Description</span>
      </div>
      <div className={styles["header-block"]}>
        <span>Price</span>
      </div>
      <div className={styles["header-block"]}>
        <span>Quantity</span>
      </div>
      <div className={styles["header-block"]}>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
    <div className={styles.total}>
      <span>TOTAL: ${total}</span>
    </div>
    <div className={styles['test-warning']}>
      *please use the following test credit card for payments*
      <br/>4242 4242 4242 4242 -- exp: 01/21 -- CVV: 123
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
