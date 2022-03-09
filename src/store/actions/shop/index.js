import { takeEvery } from "redux-saga/effects";
import { convertCollectionsSnapshotToMap, firestore } from "../../../firebase";
import { shopTypes } from "./types";

// export function* fetchCollections() {
//   yield console.log("fetchCollections called");
// }

export function* fetchCollectionStart() {
  yield takeEvery(shopTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export const fetchCollections = () => async (dispatch) => {
  const collectionRef = firestore.collection("collections");
  try {
    dispatch({ type: shopTypes.FETCH_COLLECTIONS_REQUEST });
    const snapshot = await collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    dispatch({
      type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
      payload: collectionsMap,
    });
  } catch (error) {
    dispatch({
      type: shopTypes.FETCH_COLLECTIONS_FAILURE,
      payload: error.message,
    });
  }
};
