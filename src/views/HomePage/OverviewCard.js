import React from 'react';

import Card from '@components/Card';

import styles from './OverviewCard.scss';

const OverviewCard = () => (
  <Card title="Overview" overview>
    <div className={styles.List}>
      <div className={styles.Row}>
        <p className={styles.Key}>Name</p>
        <p className={styles.Value}>Counter-Strike:Global Offensive</p>
      </div>
    </div>
  </Card>
);

export default OverviewCard;
