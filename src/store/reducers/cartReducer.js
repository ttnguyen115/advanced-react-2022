import { cartTypes } from "../actions/cartAction/types";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../actions/cartAction/utils";

const initialState = {
  isShow: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isShow: !state.isShow,
      };

    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };

    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case cartTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, payload),
      };

    case cartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
