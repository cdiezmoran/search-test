import React from 'react';
import styles from './ComparisonCard.scss';

const ComparisonCard = () => (
  <div className={styles.Card}>
    <div className={styles.Header}>
      <p>Comparison</p>
    </div>
    <div className={styles.Content}>
      <div className={styles.Column}>
        <p>Data Item 1</p>
      </div>
      <div className={styles.Column}>
        <p>Data Item 1</p>
      </div>
    </div>
  </div>
);

export default ComparisonCard;
