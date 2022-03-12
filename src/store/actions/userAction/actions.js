import { userTypes } from "./types";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInRequest = () => ({
  type: userTypes.GOOGLE_SIGN_IN_REQUEST,
});

export const emailSignInRequest = (emailAndPassword) => ({
  type: userTypes.EMAIL_SIGN_IN_REQUEST,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: userTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});
