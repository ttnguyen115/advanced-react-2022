import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/cartAction";
import CustomButton from "../CustomButton";
import "./index.scss";

function CollectionItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, price, imageUrl } = item;
  const handleAddItem = () => dispatch(addItem(item));

  return (
    <div className="collection-item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="item-footer">
        <span className="item-name">{name}</span>
        <span className="item-price ">{price}</span>
      </div>
      <CustomButton inverted onClick={handleAddItem}>
        Add to cart
      </CustomButton>
    </div>
  );
}

CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CollectionItem;
