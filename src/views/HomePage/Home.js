import React from 'react';
import styles from './Home.scss';

import SearchBar from '@components/SearchBar';
import ComparisonCard from './ComparisonCard';

const Home = () => (
  <div className={styles.Container}>
    <div className={styles.SideColumn}>
      <SearchBar />
    </div>
    <div className={styles.MidColumn}>
      <ComparisonCard />
    </div>
    <div className={styles.SideColumn}>
      <SearchBar />
    </div>
  </div>
);

export default Home;
