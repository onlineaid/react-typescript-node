import {Product} from "../../typescript/Product"
import { CartActionTypes } from '../../typescript/Cart'



export const addToCart = (product:Product, quentity:number) => async (dispatch: any, getState:any) =>  {

        let cartItem = {
            _id : product._id,
            imageUrl: product.imageUrl,
            name : product.name,
            price: product.price,
            countInStock: product.countInStock,
            quentity: quentity
        }

        dispatch({type: CartActionTypes.CART_ADD_ITEM, payload: cartItem })

        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}


export const deleteFormCart = (item: any) => async (dispatch: any) => {
    dispatch({type: CartActionTypes.CART_REMOVE_ITEM, payload: item})
}