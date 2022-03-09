// import { shopDataDefault } from "../../constants/dummy";
import { shopTypes } from "../actions/shop/types";

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case shopTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
