import { combineReducers } from 'redux';
import time from './time';

const rootReducer = combineReducers({ time });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
