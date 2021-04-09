import { combineReducers } from 'redux';
import { takeawayReducer } from './takeawayReducer';
import { authenticationReducer } from './authenticationReducer';
import { searchReducer } from './searchReducer';

export default combineReducers({ takeawayReducer, authenticationReducer, searchReducer })