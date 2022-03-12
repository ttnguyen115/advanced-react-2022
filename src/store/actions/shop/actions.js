import { shopTypes } from "./types";

export const fetchCollectionsRequest = () => ({
  type: shopTypes.FETCH_COLLECTIONS_REQUEST,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: errorMessage,
});
