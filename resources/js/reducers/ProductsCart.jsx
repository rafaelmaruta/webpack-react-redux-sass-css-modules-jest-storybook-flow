import * as ActionTypes from 'ActionTypes';
import {List} from 'immutable';

const initialState = {
  productsList: List(JSON.parse(localStorage.getItem('productsCart'))) || List()
};

const ProductsCart = function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      let list = state.productsList.push(action.product);
      localStorage.setItem('productsCart', JSON.stringify(list));
      return {productsList: list};
    case ActionTypes.DEL_PRODUCT:
      const index = state.productsList.findIndex(item => item.id === action.product.id);
      list = state.productsList.splice(index, 1);
      localStorage.setItem('productsCart', JSON.stringify(list));
      return {productsList: list};
    default:
      return state;
  }
};

export default ProductsCart;
