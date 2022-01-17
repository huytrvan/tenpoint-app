import { combineReducers } from 'redux';
import test from './test.reducer';
import content from './content.reducer';
import Router from '../../routes';

export default combineReducers({
  test,
  content,
});