import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview";
import WithSpinner from "../../components/WithSpinner";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase";
import { updateCollections } from "../../store/actions/shop";
import { selectCollections } from "../../store/actions/shop/reselect";
import CollectionPage from "../CollectionPage";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShoppingPage(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const collections = selectCollections(state);

  React.useEffect(() => {
    const collectionRef = firestore.collection("collections");

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(updateCollections(collectionsMap));
        setIsLoading(false);
      }
    );

    return () => unsubscribeFromSnapshot();
  }, [dispatch]);

  return (
    <div className="shopping-page">
      <Routes>
        <Route
          path="/"
          element={
            <CollectionOverviewWithSpinner
              isLoading={isLoading}
              {...collections}
            />
          }
        />
        <Route
          path=":collectionId"
          element={
            <CollectionPageWithSpinner isLoading={isLoading} {...collections} />
          }
        />
      </Routes>
    </div>
  );
}

ShoppingPage.propTypes = {};

export default ShoppingPage;
