import { shopTypes } from "../actions/shop/types";

const initialState = {
  collections: null,
  isLoading: false,
  errorMessage: null,
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case shopTypes.FETCH_COLLECTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case shopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: payload,
      };
    case shopTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
