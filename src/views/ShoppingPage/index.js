import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview";
import { selectCollections } from "../../store/actions/shop/reselect";
import CollectionPage from "../CollectionPage";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase';
import { updateCollections } from "../../store/actions/shop";

function ShoppingPage(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const collections = selectCollections(state);
  
  React.useEffect(() => { 
    const collectionRef = firestore.collection('collections');
    let unsubscribeFromSnapshot = null;

    unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
    })
  }, []);

  return (
    <div className="shopping-page">
      <Routes>
        <Route
          path="/"
          element={<CollectionOverview collections={collections} />}
        />
        <Route
          path=":collectionId"
          element={<CollectionPage collections={collections} />}
        />
      </Routes>
    </div>
  );
}

ShoppingPage.propTypes = {};

export default ShoppingPage;
