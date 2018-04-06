import React from 'react';
import { string, func } from 'prop-types';
import styles from './SearchBar.scss';

const SearchBar = ({ name, search }) => {
  const handleSearch = () => {
    const searchBar = document.getElementById(`search-${name}`);
    search(searchBar.name, searchBar.value);
  };

  return (
    <div className={styles.SearchWrapper}>
      <input type="text" className={styles.SearchBar} name={name} id={`search-${name}`} />
      <button onClick={handleSearch}>
        <i className="fa fa-search" />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  name: string,
  search: func.isRequired
};

SearchBar.defaultProps = {
  name: ''
};

export default SearchBar;
