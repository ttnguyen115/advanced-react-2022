import { menuItem } from "../../constants/dummy";

const initialState = {
  sections: menuItem,
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
