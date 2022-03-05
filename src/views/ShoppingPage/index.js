import React from "react";
import PreviewCollection from "../../components/PreviewCollection";
import { shopDataDefault } from "../../constants";

function ShoppingPage(props) {
  return (
    <div className="shopping-page">
      {shopDataDefault.map((collection) => {
        const { id, ...collectionProps } = collection;
        return <PreviewCollection key={id} {...collectionProps} />;
      })}
    </div>
  );
}

ShoppingPage.propTypes = {};

export default ShoppingPage;
