import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionForPreview } from "../../store/actions/shop/reselect";
import PreviewCollection from "../PreviewCollection";
import "./index.scss";

function CollectionOverview(props) {
  const state = useSelector((state) => state);
  const collections = selectCollectionForPreview(state);

  return (
    <div className="collections-overview">
      {collections.map((collection) => {
        const { id, ...collectionProps } = collection;
        return <PreviewCollection key={id} {...collectionProps} />;
      })}
    </div>
  );
}

CollectionOverview.propTypes = {};

export default CollectionOverview;
