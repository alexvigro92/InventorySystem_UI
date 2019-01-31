import {
  SAVE_CLIENT_IN_DB,
  SAVE_ORIGIN_DESTINATION_IN_DB,
  SAVE_SUPPLIER_IN_DB,
  SAVE_PRODUCT_IN_DB,
  SAVE_PRESENTATION_IN_DB
} from '../constants';

const registerReducer = (state = {
  statusClientR: "",
  statusOriAndDestR: "",
  statusSupplierR: "",
  statusProduct: "",
  statusPresentation: ""
}, action) => {
  switch (action.type) {
    case SAVE_CLIENT_IN_DB:
      state = {
        ...state,
        statusClientR: action.payload
      }
      break;
    case SAVE_ORIGIN_DESTINATION_IN_DB:
      state = {
        ...state,
        statusOriAndDestR: action.payload
      }
      break;
    case SAVE_SUPPLIER_IN_DB:
      state = {
        ...state,
        statusSupplierR: action.payload
      }
    case SAVE_PRODUCT_IN_DB:
      state = {
        ...state,
        statusProduct: action.payload
      }
      break;
    case SAVE_PRESENTATION_IN_DB:
      state = {
        ...state,
        statusPresentation: action.payload
      }
      break;
    default:
      return state;
  }
  return state;
}

export default registerReducer;
