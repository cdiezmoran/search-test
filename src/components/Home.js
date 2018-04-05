import React from 'react';
import styles from './Home.scss';

import SearchBar from './SearchBar';

const Home = () => (
  <div className={styles.Container}>
    <div className={styles.SideColumn}>
      <SearchBar />
    </div>
    <div className={styles.MidColumn}>
      <p>Middle</p>
    </div>
    <div className={styles.SideColumn}>
      <SearchBar />
    </div>
  </div>
);

export default Home;
