import { userTypes } from "../actions/userAction/types";

const initialState = {
  currentUser: null,
  isLoading: false,
  errorMessage: null,
};

const userReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case userTypes.EMAIL_SIGN_IN_REQUEST:
    case userTypes.GOOGLE_SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        currentUser: payload,
      };

    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };

    case userTypes.SIGN_IN_FAILURE:
    case userTypes.SIGN_UP_FAILURE:
    case userTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
