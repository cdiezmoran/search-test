import React from 'react';
import { func } from 'prop-types';
import { gameShape } from '@shapes';

import SearchBar from '@components/SearchBar';
import ComparisonCard from './ComparisonCard';
import OverviewCard from './OverviewCard';

import styles from './Home.scss';

const Home = ({ leftResult, rightResult, search }) => (
  <div className={styles.Container}>
    <div className={styles.SideColumn}>
      <SearchBar name="leftBar" search={search} />
      <OverviewCard result={leftResult} />
    </div>
    <div className={styles.MidColumn}>
      <ComparisonCard leftResult={leftResult} rightResult={rightResult} />
    </div>
    <div className={styles.SideColumn}>
      <SearchBar name="rightBar" search={search} />
      <OverviewCard result={rightResult} />
    </div>
  </div>
);

Home.propTypes = {
  leftResult: gameShape,
  rightResult: gameShape,
  search: func.isRequired
};

Home.defaultProps = {
  leftResult: null,
  rightResult: null
};

export default Home;
