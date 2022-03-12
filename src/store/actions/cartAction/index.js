import { all, call, put, takeLatest } from "redux-saga/effects";
import { userTypes } from "../userAction/types";
import { clearCart } from "./actions";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignoutSuccess() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
  yield all([call(onSignoutSuccess)]);
}
