import PropTypes from "prop-types";
import React from "react";
import CollectionItem from "../CollectionItem";
import "./index.scss";

function PreviewCollection({ title, items }) {
  return (
    <div className="preview-collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            const { id } = item;
            return <CollectionItem key={id} {...item} />;
          })}
      </div>
    </div>
  );
}

PreviewCollection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(Object).isRequired,
};

export default PreviewCollection;
