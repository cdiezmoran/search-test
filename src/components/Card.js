import React from 'react';
import { string } from 'prop-types';
import { childrenShape } from '@shapes';
import styles from './Card.scss';

const Card = ({ title, children }) => (
  <div className={styles.Card}>
    {
      title
        ? (
          <div className={styles.Header}>
            <p>{title}</p>
          </div>
        )
        : null
    }
    <div className={styles.Content}>
      {children}
    </div>
  </div>
);

Card.propTypes = {
  children: childrenShape.isRequired,
  title: string
};

Card.defaultProps = {
  title: ''
};

export default Card;
