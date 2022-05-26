import { CartAction, CartActionTypes, CartState } from "../../typescript/Cart";

const cartInitialState: CartState = {
  cartItems: [],
};

export const addToCartReducer = (
  state: CartState = cartInitialState,
  action: CartAction
) => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_ITEM:

      // Check if item already exists in the cart state
    //   const itemExists = state.cartItems.find(
    //     (cartItem) => cartItem.product === item.product
    //   )!;

    //   if (itemExists) {
    //     return {
    //       ...state,
    //       cartItems: state.cartItems.map((cartItem) =>
    //         cartItem.product === itemExists.product ? item : cartItem
    //       ),
    //     };
    //   } else {
    //     return { ...state, cartItems: [...state.cartItems, item] };
    //   }

    const alreadyExist = state.cartItems.find( item => item._id == action.payload._id)

    if(alreadyExist) {
        return {
            ...state,
            cartItems: state.cartItems.map(item => item._id == action.payload._id ? action.payload : item)
        }
    } else {
        
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };


    }

    default:
      return state;
  }
};
