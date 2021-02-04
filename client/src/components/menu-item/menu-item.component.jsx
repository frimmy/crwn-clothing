import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './menu-item.module.scss';
const cx = classnames.bind(styles);

const MenuItem = ({ title, imageUrl, id, size, linkUrl, history, match }) => (
  <div className={cx(size, 'menu-item')} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className={styles["background-image"]} style={{
      backgroundImage: `url(${imageUrl})`
    }}/>
    <div className={styles.content}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <span className={styles.subtitle}>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem);
