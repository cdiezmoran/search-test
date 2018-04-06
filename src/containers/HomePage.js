import React from 'react';

import { fetchGameById } from '@actions/games';

import Home from '@views/HomePage/Home';

const mapDispatchToProps = dispatch => ({
  fetchGame: id => dispatch(fetchGameById(id))
});

const HomePage = () => <Home />;

export default HomePage;
