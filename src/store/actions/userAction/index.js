import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "../../../firebase";
import { signInFailure, signInSuccess } from "./actions";
import { userTypes } from "./types";

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_REQUEST, signInWithGoogle);
}

export function* onEmailSignIn() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_REQUEST, signInWithEmail);
}

export function* userSaga() {
  yield all([call(onGoogleSignIn), call(onEmailSignIn)]);
}
