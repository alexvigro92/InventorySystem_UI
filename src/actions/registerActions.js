// import axios from 'axios';
import {
  SAVE_CLIENT_IN_DB,
  SAVE_ORIGIN_DESTINATION_IN_DB,
  SAVE_SUPPLIER_IN_DB,
  SAVE_PRODUCT_IN_DB,
  SAVE_PRESENTATION_IN_DB
} from '../constants';

export const saveClientInDB = (data) => {
  console.log(`SAVE_CLIENT_IN_DB ${data}`);
  return {
    type: SAVE_CLIENT_IN_DB,
    payload: 'ok'
  };
}

export const saveOriginAndDestinationInDB = (data) => {
  console.log(`SAVE_ORIGIN_DESTINATION_IN_DB ${data}`);
  return {
    type: SAVE_ORIGIN_DESTINATION_IN_DB,
    payload: 'ok'
  };
}

export const saveSupplierInDB = (data) => {
  console.log(`SAVE_SUPPLIER_IN_DB ${data}`);
  return {
    type: SAVE_SUPPLIER_IN_DB,
    payload: 'ok'
  };
}

export const saveProductInDB = (data) => {
  console.log(`SAVE_PRODUCT_IN_DB ${data}`);
  return {
    type: SAVE_PRODUCT_IN_DB,
    payload: 'ok'
  };
}

export const savePresentationInDB = (data) => {
  console.log(`SAVE_PRESENTATION_IN_DB ${data}`);
  return {
    type: SAVE_PRESENTATION_IN_DB,
    payload: 'ok'
  };
}
