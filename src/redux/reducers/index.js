import { combineReducers } from 'redux';
import notes from './notesReducer';
import user from './userReducer'

export default combineReducers( {
  notes,
  user
})