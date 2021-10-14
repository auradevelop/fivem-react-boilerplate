import { combineReducers } from 'redux';

import appReducer from './containers/reducer';

export default () =>
  combineReducers({
    app: appReducer,
  });
