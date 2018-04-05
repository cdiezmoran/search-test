import React from 'react';
import styles from './SearchBar.scss';

const Home = () => (
  <div className={styles.SearchWrapper}>
    <i className="fa fa-search" />
    <input type="text" className={styles.SearchBar} />
  </div>
);

export default Home;
