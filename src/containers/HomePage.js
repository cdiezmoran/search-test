import React from 'react';
import { connect } from 'react-redux';

import { fetchGameById } from '@actions/games';

import Home from '@views/HomePage/Home';

const mapStateToProps = ({ games: { items, hasError, isLoading } }) => (
  {
    games: items,
    hasError,
    isLoading
  }
);

const mapDispatchToProps = dispatch => ({
  fetchGame: id => dispatch(fetchGameById(id))
});

const HomePage = () => <Home />;

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
