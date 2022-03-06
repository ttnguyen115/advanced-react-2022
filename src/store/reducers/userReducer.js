import { userTypes } from "../actions/userAction/types";

const initialState = {
  currentUser: null,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case userTypes.SET_CURRENT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case userTypes.SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };
    case userTypes.SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
