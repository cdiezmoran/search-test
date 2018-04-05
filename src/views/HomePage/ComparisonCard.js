import React from 'react';
import Card from '@components/Card';

import styles from './ComparisonCard.scss';


const ComparisonCard = () => (
  <Card title="Comparison">
    <div className={styles.Column}>
      <p>Data Item 1</p>
    </div>
    <div className={styles.Column}>
      <p>Data Item 1</p>
    </div>
  </Card>
);

export default ComparisonCard;
