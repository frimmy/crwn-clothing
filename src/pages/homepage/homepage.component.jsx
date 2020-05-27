import React from 'react';

import styles from './homepage.module.scss';

import Directory from '../../components/directory/directory.component';



const HomePage = () => (
  <div className={styles.homepage}>
    <Directory/>
  </div>
);

export default HomePage;
