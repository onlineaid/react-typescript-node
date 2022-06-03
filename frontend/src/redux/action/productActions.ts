import axios from "axios";
// import { AppThunk } from "../../redux/store";
import {ProductListActionTypes, ProductDetailsActionTypes} from '../../typescript'


// Fetch all product with backend mongoose find() method 
// (keyword = '', pageNumber = '') =>
export const getAllProducts = async (dispatch:any) => {
  try {
    dispatch({ type: ProductListActionTypes.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/v1/products`);
    // const { data } = await axios.get(`http://localhost:5000/api/products?keyword=${keyword}&pageNumber=${pageNumber}`)

    dispatch({
      type: ProductListActionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductListActionTypes.PRODUCT_LIST_FAILURE,
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
