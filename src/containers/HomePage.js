import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { arrayOf, bool, func } from 'prop-types';
import { gameShape } from '@shapes';

import { fetchGameById, gameHasErrored } from '@actions/games';
import setResult from '@actions/results';

import Home from '@views/HomePage/Home';

const mapStateToProps = (props) => {
  const {
    games: { items, hasError, isLoading },
    results: { leftResult, rightResult }
  } = props;

  return ({
    games: items,
    hasError,
    isLoading,
    leftResult,
    rightResult
  });
};


const mapDispatchToProps = dispatch => ({
  fetchGame: (id, name) => dispatch(fetchGameById(id, name)),
  setGameError: hasError => dispatch(gameHasErrored(hasError)),
  setGameResult: (name, game) => dispatch(setResult(name, game))
});

class HomePage extends Component {
  componentWillReceiveProps(nextProps) {
    const { setGameError } = this.props;
    if (nextProps.hasError) {
      toastr.error('We couldn\'t find anything that matches your search criteria.', 'Not Found!');
      setGameError(false);
    }
  }

  handleSearch = (name, value) => {
    const { fetchGame, setGameResult } = this.props;
    if (!Number.isNaN(value)) {
      const game = this.findGameById(value);
      if (game) {
        setGameResult(name, game);
      } else {
        fetchGame(value, name);
      }
    }
  };

  findGameById = (id) => {
    const { games } = this.props;
    const result = games.filter(game => game.id === parseInt(id, 10));
    return result.length >= 1 ? result : null;
  };

  render() {
    const { leftResult, rightResult } = this.props;
    return <Home leftResult={leftResult} rightResult={rightResult} search={this.handleSearch} />;
  }
}

HomePage.propTypes = {
  games: arrayOf(gameShape),
  leftResult: gameShape,
  rightResult: gameShape,
  hasError: bool,
  fetchGame: func.isRequired,
  setGameResult: func.isRequired,
  setGameError: func.isRequired
};

HomePage.defaultProps = {
  games: [],
  leftResult: null,
  rightResult: null,
  hasError: false
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
