
import { combineReducers } from 'redux';
import slidesReducer from './slidesSlice';

const rootReducer = combineReducers({
  slides: slidesReducer,
});

export default rootReducer;