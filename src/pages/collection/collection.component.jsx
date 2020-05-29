import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import styles from './collection.module.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection, match}) => {
  console.log({collection});
  console.log({match});
  const { title, items } = collection;
  return (
    <div className={styles['collection-page']}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);
