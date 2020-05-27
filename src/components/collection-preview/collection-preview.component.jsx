import React from 'react'

import CollectionItem from '../collection-item/collection-item.component';

import styles from './collection-preview.module.scss';

const CollectionPreview = ({title, items}) => (
  <div className={styles['collection-preview']}>
    <h1 className={styles.title}>{title.toUpperCase()}</h1>
    <div className={styles.preview}>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}/>
      ))}
    </div>
  </div>
);

export default CollectionPreview;
