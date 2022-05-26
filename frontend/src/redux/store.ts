
import {createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getAllProductReducer,
  getSingleProductReducer,
} from "./reducers/productReducer";

import {addToCartReducer} from './reducers/cartReducer'


const rootReducer = combineReducers({
  productList: getAllProductReducer,
  productDetails: getSingleProductReducer,
  cart: addToCartReducer
});



const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")!)
  : [];

// const userInfoFromLocalStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo")!)
//   : null;

// const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
//   ? JSON.parse(localStorage.getItem("shippingAddress")!)
//   : undefined;

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage
  }
};



const middlware = [thunk];
const store = createStore(
  rootReducer, initialState, composeWithDevTools(
  applyMiddleware(...middlware)

  )
);

export default store;
