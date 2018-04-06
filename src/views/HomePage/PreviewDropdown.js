import React from 'react';

import Dropdown from '@components/Dropdown';

import styles from './PreviewDropdown.scss';

const PreviewDropdown = () => (
  <Dropdown display>
    <div className={styles.List}>
      <p>This is a dropdown</p>
      <p>This is a dropdown</p>
      <p>This is a dropdown</p>
      <p>This is a dropdown</p>
      <p>This is a dropdown</p>
      <p>This is a dropdown</p>
      <p>This is a dropdown</p>
    </div>
  </Dropdown>
);

export default PreviewDropdown;
