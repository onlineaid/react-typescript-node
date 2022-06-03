import {ProductListState,
   ProductDetailsState,
   CartState
} from "../typescript";
// import {ProductDetailsState} from "../typescript/ProductDetails";

  
  export interface ReduxState {
    productList: ProductListState;
    productDetails: ProductDetailsState;
    cart: CartState
  }