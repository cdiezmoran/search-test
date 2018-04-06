import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import games from './games';
import results from './results';

const rootReducer = combineReducers({
  router,
  games,
  results
});

export default rootReducer;
