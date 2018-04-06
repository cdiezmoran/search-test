import React from 'react';

import SearchBar from '@components/SearchBar';
import ComparisonCard from './ComparisonCard';
import PreviewDropdown from './PreviewDropdown';

import styles from './Home.scss';

const Home = () => (
  <div className={styles.Container}>
    <div className={styles.SideColumn}>
      <SearchBar />
      <PreviewDropdown />
    </div>
    <div className={styles.MidColumn}>
      <ComparisonCard />
    </div>
    <div className={styles.SideColumn}>
      <SearchBar />
      <PreviewDropdown />
    </div>
  </div>
);

export default Home;
