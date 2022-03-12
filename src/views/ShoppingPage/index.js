import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview";
import WithSpinner from "../../components/WithSpinner";
import { fetchCollectionsRequest } from "../../store/actions/shop/actions";
import {
  selectCollections,
  selectCollectionsIsLoading,
} from "../../store/actions/shop/reselect";
import CollectionPage from "../CollectionPage";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShoppingPage(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const collections = selectCollections(state);
  const isLoading = selectCollectionsIsLoading(state);

  React.useEffect(() => {
    dispatch(fetchCollectionsRequest());
  }, []);

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
