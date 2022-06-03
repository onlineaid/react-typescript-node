// import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { addToCart, deleteFormCart } from "../redux/action/cartAction";
import { AppDispatch } from "../redux/store";
import { ReduxState } from "../typescript/ReduxState";
import { Cart } from "../typescript/Cart";

import {
  faCartShopping,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function CartViews() {
  // const [quentity, setQuentity] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();

  // const getSingleState = useSelector<any>((state) => state.productDetails);

  // const { loading, product, error }: any = getSingleState;

  const addtocartreducer = useSelector((state:ReduxState) => state.cart);
  const { cartItems } = addtocartreducer;

  return (
    <div className="row">
      <div className="col-12">
        <div className="cart-top mt-4 mb-2">
          <div className="basket-box d-flex align-items-center">
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
            <h4 className="ps-2">Basket</h4>
          </div>

          <div className="trash-box d-flex align-items-center">
            <FontAwesomeIcon icon={faTrash} />
            <h6 className="ps-2 mb-0">Empty trash</h6>
          </div>
        </div>
      </div>
      {cartItems.map((item: any) => {
        return (
          <div key={item._id} className="col-12">
            <div className="cart-product">
              <div className="cat-img-with-title">
                <img src={item.imageUrl} alt="" />
                <div className="title-group">
                  <h4>{item.name.substring(0, 20)}...</h4>
                  <span>Qty : {item.quentity}</span> <br />
                  <span>price : {item.price} per pcs</span>
                </div>
              </div>

              {/* <div className="cart-increment-and-dcrement"> */}

              <select
                value={item.quentity}
                onChange={(e) => dispatch(addToCart(item, +e.target.value))}
              >
                {Array.from(Array(item.countInStock).keys()).map((x, i) => {
                  return (
                    <option key={x + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              {/* <div className="minus">-</div>
                <div className="counter">1</div>
                <div className="plus">+</div> */}
              {/* </div> */}
              <div className="price">
                <h5>
                  <strong>${item.quentity * item.price}</strong>
                </h5>
              </div>
              <div
                className="cart-minimize"
                onClick={() => dispatch(deleteFormCart(item))}
              >
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
          </div>
        );
      })}

      <div className="col-12">
        <div className="cart-bottom mt-4">
          <div className="basket-box d-flex align-items-center">
            <h4 className="ps-3">
              Total purchess : <strong>{cartItems.length} ps.</strong>
            </h4>
          </div>

          <div className="basket-box d-flex align-items-center">
            <h4 className="ps-3">
              Total Amount :
              <strong className="amount">
                $
                {cartItems.reduce(
                  (acc: number, item: Cart) => acc + item.price * item.quentity,
                  0
                )}
              </strong>
            </h4>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="two-btn mt-4">
          <Link to="/">come back</Link>
          <a href="./payment.html" className="btn-2">
            pay now
          </a>
        </div>
      </div>
    </div>
  );
}

export default CartViews;
