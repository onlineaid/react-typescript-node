import {
    ProductListAction,
    ProductListActionTypes,
    ProductListState,
    ProductDetailsAction,
    ProductDetailsActionTypes,
    ProductDetailsState,
  } from "../../typescript";
  import { PayloadAction } from "@reduxjs/toolkit";

// Get Request @Get all product using axios

const initialProductListState:ProductListState = {
    products: [],
    loading: false,
  };

  // console.log(initialProductListState)


//   state = {products: []}, action:any
export const getAllProductReducer = ( state: ProductListState = initialProductListState,
    action: PayloadAction  ) => {
    switch (action.type) {

        
        case ProductListActionTypes.PRODUCT_LIST_REQUEST:
            return { loading: true };

        case ProductListActionTypes.PRODUCT_LIST_SUCCESS:
            return { products: action.payload, loading: false };
        case ProductListActionTypes.PRODUCT_LIST_FAILURE:
            return { error: action.payload, loading: false };

        default:
            return state;
    }
};

// Get Request @Get single product by it's ID
const initialProductDetailsState:ProductDetailsState = {
    product: [],
    loading: false,
  };

// state = {product: []}, action: any
export const getSingleProductReducer = ( state: ProductDetailsState = initialProductDetailsState,
    action: ProductDetailsAction) => {
    switch (action.type) {

        case ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            }

        case ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case ProductDetailsActionTypes.PRODUCT_DETAILS_FAIL:
            return {
                error: action.payload,
                loading: false
                // error : null

            }

        // case CLEAR_ERRORS:
        //     return {
        //         ...state,
        //         error: null
        //     }

        default:
            return state
    }
}