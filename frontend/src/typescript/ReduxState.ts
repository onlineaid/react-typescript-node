import {ProductListState} from "../typescript/ProductList";
import {ProductDetailsState} from "../typescript/ProductDetails";

  
  export interface ReduxState {
    productList: ProductListState;
    productDetails: ProductDetailsState;
  }