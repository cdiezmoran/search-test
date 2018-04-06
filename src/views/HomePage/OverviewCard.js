import React from 'react';
import uuid from 'uuid/v4';
import { gameShape } from '@shapes';

import Card from '@components/Card';

import styles from './OverviewCard.scss';

const OverviewCard = ({ result }) => {
  const renderRows = () =>
    Object.keys(result.overviewFields).map(key => (
      <div key={uuid()} className={styles.Row}>
        <p className={styles.Key}>{key}</p>
        <p className={styles.Value}>{result.overviewFields[key]}</p>
      </div>
    ));


  return (
    <Card title="Overview" overview>
      <div className={styles.List}>
        {
          result
            ? renderRows()
            : <p>Search for a game above.</p>
        }
      </div>
    </Card>
  );
};

OverviewCard.propTypes = {
  result: gameShape
};

OverviewCard.defaultProps = {
  result: null
};

export default OverviewCard;
