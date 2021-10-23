import { combineReducers } from "redux";

import counterReducer from './counterReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  count: counterReducer,
});

export default rootReducer;