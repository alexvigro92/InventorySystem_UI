import {
  SET_FLAG_TRUE,
  SET_FLAG_FALSE
} from '../constants';

const modalFlagsReducer = (state = {
  card3:false,
  card4:false
}, action) => {
  switch (action.type) {
    case SET_FLAG_TRUE:
      state = {
        ...state,
        [action.payload]: true
      }
      break;
    case SET_FLAG_FALSE:
      state = {
        ...state,
        [action.payload]: false
      }
      break;
    default:
      return state;
  }
  return state;
}

export default modalFlagsReducer;
