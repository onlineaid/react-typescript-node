
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllProductReducer, getSingleProductReducer } from "./reducers/productReducer";

const finalReducer = combineReducers({
    getAllProductReducer : getAllProductReducer,
    getSingleProductReducer: getSingleProductReducer
})

// getAllProductReducer



// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";


// const reducer = combineReducers({
    
  
// });

// // let initialState = {
// //     cart: {
// //         cartItems: localStorage.getItem('cartItems')
// //             ? JSON.parse(localStorage.getItem('cartItems'))
// //             : [],
// //         shippingInfo: localStorage.getItem('shippingInfo')
// //             ? JSON.parse(localStorage.getItem('shippingInfo'))
// //             : {}
// //     }
// // }

const middlware = [thunk];
const store = createStore(finalReducer,  composeWithDevTools(applyMiddleware(...middlware)))

export default store;

