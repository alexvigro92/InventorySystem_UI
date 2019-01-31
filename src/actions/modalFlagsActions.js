// import axios from 'axios';
import {
  SET_FLAG_TRUE,
  SET_FLAG_FALSE
} from '../constants';

export const setModalFlagTrue = (modalId) => {
  console.log(`SET_FLAG_TRUE ${modalId}`);
  return {
    type: SET_FLAG_TRUE,
    payload: modalId
  };
}

export const setModalFlagFalse = (modalId) => {
  console.log(`SET_FLAG_FALSE ${modalId}`);
  return {
    type: SET_FLAG_FALSE,
    payload: modalId
  };
}
