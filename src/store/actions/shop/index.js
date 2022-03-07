import { takeEvery } from "redux-saga/effects";
import { shopTypes } from "./types";

export function* fetchCollections() {
  yield console.log("fetchCollections called");
}

export function* fetchCollectionStart() {
  yield takeEvery(shopTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export const updateCollections = collectionsMap => ({
  type: shopTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
})