import { all, call } from "redux-saga/effects";
import { cartSaga } from "./actions/cartAction";
import { fetchCollection, shopSaga } from "./actions/shop";
import { userSaga } from "./actions/userAction";

export default function* rootSaga() {
  yield all([
    call(fetchCollection),
    call(userSaga),
    call(cartSaga),
    call(shopSaga),
  ]);
}
