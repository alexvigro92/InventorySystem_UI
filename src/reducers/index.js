import { combineReducers } from 'redux';
import modalFlagsReducer from './modalFlagsReducer'
import registerReducer from './registerReducer'

export default combineReducers({
  modalFlagsReducer,
  registerReducer
})
