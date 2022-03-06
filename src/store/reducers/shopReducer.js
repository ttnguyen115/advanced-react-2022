import { shopDataDefault } from "../../constants/dummy";

const initialState = {
  collections: shopDataDefault,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
