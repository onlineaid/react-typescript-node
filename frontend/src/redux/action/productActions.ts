import axios from "axios";
// import { ProductDetailsActionTypes} from '../../typescript/'
// import { AppThunk } from "../../redux/store";

import {ProductListActionTypes} from '../../typescript/ProductList'
import {ProductDetailsActionTypes} from '../../typescript/ProductDetails'


// Fetch all product with backend mongoose find() method 
export const getAllProducts = async (dispatch:any) => {
  try {
    dispatch({ type: ProductListActionTypes.ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/v1/products`);

    dispatch({
      type: ProductListActionTypes.ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductListActionTypes.ALL_PRODUCTS_FAIL,
      payload: error,
      // payload: error.response.data.message,
    });
  }

  //   another way =================...
  //   axios
  //     .get("http://localhost:5000/api/v1/products")
  //     .then((res) => {
  //       console.log(res);
  //       dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);

  //       dispatch({
  //         type: ALL_PRODUCTS_FAIL,
  //         payload: err,
  //       });
  //     });
};

// Get single product details by it's mongoose _id 
export const getProductDetailsById = (id: string | undefined) => async (dispatch:any) => {
  try {

      dispatch({ type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST });

      const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`)

      dispatch({
          type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS,
          payload: data.product
      })

  } catch (error) {
      dispatch({
          type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAIL,
          payload: error
          // payload: error.response.data.message
      })
  }
}
