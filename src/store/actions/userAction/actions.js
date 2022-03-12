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

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutRequest = () => ({
  type: userTypes.SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (errorMessage) => ({
  type: userTypes.SIGN_OUT_FAILURE,
  payload: errorMessage,
});

export const signUpRequest = (userCredentials) => ({
  type: userTypes.SIGN_UP_REQUEST,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: userTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = (errorMessage) => ({
  type: userTypes.SIGN_UP_FAILURE,
  payload: errorMessage,
});
