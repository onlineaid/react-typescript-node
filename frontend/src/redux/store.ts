// Action , AnyAction
import {createStore, combineReducers, applyMiddleware, Action } from '@reduxjs/toolkit'
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {ReduxState} from '../typescript/ReduxState'

import {
  getAllProductReducer,
  getSingleProductReducer,
} from "./reducers/productReducer";

import {cartReducer} from './reducers/cartReducer';

export type AppDispatch = ThunkDispatch<ReduxState, unknown, Action<string>>;
export type AppThunk = ThunkAction<
  Promise<void>,
  ReduxState,
  unknown,
  Action<string>
>;
// <ReduxState, AnyAction>

const reducer = combineReducers({
  productList: getAllProductReducer,
  productDetails: getSingleProductReducer,
  cart: cartReducer
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
  cart: {cartItems: cartItemsFromLocalStorage}
  
};

const middlware = [thunk];
const store = createStore(
  reducer, initialState, composeWithDevTools(
  applyMiddleware(...middlware)

  )
);

export default store;
