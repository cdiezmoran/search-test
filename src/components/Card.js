import React from 'react';
import { string, bool } from 'prop-types';
import { childrenShape } from '@shapes';
import styles from './Card.scss';

const Card = ({ title, children, overview }) => (
  <div className={`${styles.Card} ${overview ? styles.Overview : ''}`}>
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
  title: string,
  overview: bool
};

Card.defaultProps = {
  title: '',
  overview: false
};

export default Card;
