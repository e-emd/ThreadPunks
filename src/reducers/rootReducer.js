import { combineReducers } from 'redux';
import punksReducer from './punksReducer';
import punksDetailsReducer from './punksDetailsReducer';

const rootReducer = combineReducers({
  punksDetails: punksDetailsReducer,
  punks: punksReducer,
});

export default rootReducer;
