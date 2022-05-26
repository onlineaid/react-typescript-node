import React, { useEffect } from "react";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/productActions";
// import {AppDispatch} from '../../redux/store';

// import {ReduxState} from '../../typescript/ReduxState'

function Main() {
  const dispatch = useDispatch<any>();

  const getProductState = useSelector<any>(
    (state) => state.productList
  );

  const { loading, products, error }:any = getProductState;

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="row">
        {loading ? (
          <h1>Loading ....</h1>
        ) : error ? (
          <h1>Somthing went wrong please reload your page</h1>
        ) : (
          products.map((product:any) => {
            return <Product product={product} key={product._id} />;
          })
        )}
      </div>
    </React.Fragment>
  );
}

export default Main;
