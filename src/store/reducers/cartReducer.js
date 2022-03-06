import { cartTypes } from "../actions/cartAction/types";

const initialState = {
  isShow: false,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isShow: !state.isShow,
      };

    default:
      return state;
  }
};

export default cartReducer;