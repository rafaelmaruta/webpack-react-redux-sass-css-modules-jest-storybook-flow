import {ADD_PRODUCT, DEL_PRODUCT} from 'ActionTypes';

const AddProduct = product => (
  {
    type: ADD_PRODUCT,
    product
  }
);

const DelProduct = product => (
  {
    type: DEL_PRODUCT,
    product
  }
);

export {AddProduct, DelProduct};
