import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './eventSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more slices here
});

export default rootReducer;
