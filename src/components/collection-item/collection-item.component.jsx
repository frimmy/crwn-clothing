import React from 'react';
import { connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions.js';

import styles from './collection-item.module.scss';

const CollectionItem = ({item, addItem}) => {
  const { name, price, imageUrl } = item;

  return (
  <div className={styles['collection-item']}>
    <div
      className={styles["image"]}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className={styles["collection-footer"]}>
      <span className={styles["name"]}>{name}</span>
      <span className={styles["price"]}>{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted customStyles={styles['custom-button']}>
      Add to Cart
    </CustomButton>
  </div>
)}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
