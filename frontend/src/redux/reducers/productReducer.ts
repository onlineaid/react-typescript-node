import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from '../constant/product';


// Get Request @Get all product using axios
export const getAllProductReducer = (state ={products : []}, action:any ) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return { loading: true };

        case ALL_PRODUCTS_SUCCESS:
            return { products: action.payload, loading: false };
        case ALL_PRODUCTS_FAIL:
            return { error: action.payload, loading: false };

        default:
            return state;
    }
};

// Get Request @Get single product by it's ID
export const getSingleProductReducer = (state = { product: [] }, action:any) => {
    switch (action.type) {

        case PRODUCT_DETAILS_REQUEST:
            return {
                // ...state,
                loading: true,
            }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case PRODUCT_DETAILS_FAIL:
            return {
                // ...state,
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