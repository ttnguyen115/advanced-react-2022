import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview";
import { selectCollections } from "../../store/actions/shop/reselect";
import CollectionPage from "../CollectionPage";

function ShoppingPage(props) {
  const state = useSelector((state) => state);
  const collections = selectCollections(state);

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
