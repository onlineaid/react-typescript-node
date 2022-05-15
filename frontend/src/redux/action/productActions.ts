import axios from "axios";
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constant/product";

// Fetch all product with backend mongoose find() method 
export const getAllProducts: any = async (dispatch: any) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/v1/products`);

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
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
export const getProductDetailsById:any = (id: string) => async (dispatch: any) => {
  try {

      dispatch({ type: PRODUCT_DETAILS_REQUEST });

      const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`)

      dispatch({
          type: PRODUCT_DETAILS_SUCCESS,
          payload: data.product
      })

  } catch (error: any) {
      dispatch({
          type: PRODUCT_DETAILS_FAIL,
          payload: error
          // payload: error.response.data.message
      })
  }
}
