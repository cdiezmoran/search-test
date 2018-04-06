import React from 'react';
import uuid from 'uuid/v4';
import { gameShape } from '@shapes';
import Card from '@components/Card';

import styles from './ComparisonCard.scss';


const ComparisonCard = ({ leftResult, rightResult }) => {
  const renderRows = () => {
    const detailedFields = leftResult ? leftResult.detailedFields : rightResult.detailedFields;
    return Object.keys(detailedFields).map(key => (
      <div className={styles.Row} key={uuid()}>
        <p>{leftResult ? leftResult.detailedFields[key] : ''}</p>
        <p>{rightResult ? rightResult.detailedFields[key] : ''}</p>
      </div>
    ));
  };

  const renderContent = () => {
    if (leftResult || rightResult) {
      return (
        <div className={styles.List}>
          {renderRows()}
        </div>
      );
    }

    return <p>Search for games to start comparing.</p>;
  };

  return (
    <Card title="Comparison">
      {renderContent()}
    </Card>
  );
};

ComparisonCard.propTypes = {
  leftResult: gameShape,
  rightResult: gameShape,
};

ComparisonCard.defaultProps = {
  leftResult: null,
  rightResult: null
};

export default ComparisonCard;
