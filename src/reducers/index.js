import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import games from './games';

const rootReducer = combineReducers({
  router,
  games
});

export default rootReducer;
