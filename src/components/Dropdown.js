import React from 'react';
import { bool } from 'prop-types';
import { childrenShape } from '@shapes';
import styles from './Dropdown.scss';

const Dropdown = ({ display, children }) => (
  display
    ? (
      <div className={styles.Dropdown}>
        <div className={styles.Container}>
          {children}
        </div>
      </div>
    )
    : null
);

Dropdown.propTypes = {
  children: childrenShape.isRequired,
  display: bool
};

Dropdown.defaultProps = {
  display: false
};

export default Dropdown;
