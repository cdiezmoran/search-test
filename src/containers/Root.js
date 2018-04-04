import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { object } from 'prop-types';
import { storeShape } from '../shapes';

import Routes from '../routes';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: storeShape.isRequired,
  history: object.isRequired
};

export default Root;
