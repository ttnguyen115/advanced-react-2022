import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem";
import { selectCollection } from "../../store/actions/shop/reselect";
import "./index.scss";

function CollectionPage(props) {
  const { collectionId } = useParams();
  const state = useSelector((state) => state);
  const collection = selectCollection(collectionId)(state);
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

CollectionPage.propTypes = {};

export default CollectionPage;
