import { all, call } from "redux-saga/effects";
import { fetchCollection } from "./actions/shop";
import { userSaga } from "./actions/userAction";

export default function* rootSaga() {
  yield all([call(fetchCollection), call(userSaga)]);
}
