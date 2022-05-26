import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../redux/action/productActions";
import { addToCart } from '../redux/action/cartAction'
// import { AppDispatch } from "../redux/store";
// import { ReduxState } from "../typescript/ReduxState";

function ProductDetails() {


  const [quentity, setQuentity] = useState<number>(1);

  const dispatch = useDispatch<any>();

  const getSingleState = useSelector<any>((state) => state.productDetails);

  const { loading, product, error }: any = getSingleState;

  const params = useParams();
  // const navigate = useNavigate();
  const { id } = params;

  // console.log(product)

  useEffect(() => {
    dispatch(getProductDetailsById(id));
  }, [dispatch, id]);

  // if (!product) {
  //   return navigate("/shop");
  // }

  function addtocart() {
    dispatch(addToCart(product, quentity))
    console.log(quentity)
    // alert(dispatch(addToCart(product, quentity)))
  }

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
              <h1>Name : {product.name}</h1>
              <h4>Price : ${product.price}</h4>
              <p>Rading : {product.rating}</p>
              <h5>Status: <span id="stock_status" className={product.countInStock > 0 ? "greenColor" : "redColor" }>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span></h5>
              <div className="cart d-flex">
                <h3 className="me-3">Select Quentity</h3>
                <select value={quentity} onChange={(e) => {setQuentity(+e.target.value)}}>
                  {Array.from(Array(product.countInStock).keys()).map((x,i) => {
                    return <option key={x + 1} value={i + 1}> {i + 1}</option>
                  })}
                </select>
              </div>

            <button className="btn btn-primary" onClick={addtocart}>
              Add to Cart
            </button>
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
