import Product from "../Product/Product";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/productActions";

function Main() {
  // const [product, setProduct] = useState<any>([]);
  const dispatch = useDispatch();

 

  const getProductState = useSelector<any>(
    (state) => state.getAllProductReducer
  );

  const { loading, products, error }: any = getProductState;

  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/api/v1/products")
    //   .then((res) => {
    //     // console.log(res);
    //     setProduct(res.data);
    //   })
    //   .catch((err) => console.log(err));
    let fun = function () {
      console.log('this is a function')
    }
  
    let invoke = fun
    invoke()

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
            return <Product product={product} key={product._id} />

          })
        )}
      </div>
    </React.Fragment>
  );
}

export default Main;
