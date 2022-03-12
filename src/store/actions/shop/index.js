import { all, call, put, takeLatest } from "redux-saga/effects";
import { convertCollectionsSnapshotToMap, firestore } from "../../../firebase";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./actions";
import { shopTypes } from "./types";

function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollection() {
  yield takeLatest(shopTypes.FETCH_COLLECTIONS_REQUEST, fetchCollections);
}

export function* shopSaga() {
  yield all([call(fetchCollection)]);
}
