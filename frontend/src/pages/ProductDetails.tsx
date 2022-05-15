import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../redux/action/productActions";

function ProductDetails(): any {
  // const [first, setfirst] = useState(second);

  const dispatch = useDispatch();
  const { loading, product, error }: any = useSelector<any>(
    (state) => state.getSingleProductReducer
  );

  const params = useParams();
  // const navigate = useNavigate();
  const { id } = params;

  useEffect(() => {
    dispatch(getProductDetailsById(id));
    // return navigate("/shop");
  }, [dispatch, id]);

  // if (!pro) {
  //   return navigate("/shop");
  // }

  return (
    <div>
      {loading ? (
        <h1>Loading ....</h1>
      ) : error ? (
        <h1>Somthing went wrong please reload your page</h1>
      ) : (
        <div>
          <Link to="/" className="btn btn-primary p-2 mt-3">
            {" "}
            Go Back to the home
          </Link>
          <p>Product details with id is {id}</p>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <img className="w-100" src={product.imageUrl} alt="" />
            </div>
            <div className="col-md-6">
              <h1>{product.name}</h1>
              <h4>${product.price}</h4>
              <p>{product.rating}</p>

              {/* <Rating 
              emptySymbol="fa fa-star-o fa-1x"
              fullSymbol="fa fa-start fa-1x"
            /> */}
            </div>
          </div>
        </div>

        // products.map((product: any) => {
        //   return <Product product={product} key={product._id} />;
        // })
      )}
    </div>
  );
}

export default ProductDetails;
