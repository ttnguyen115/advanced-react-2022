import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../store/actions/cartAction/actions";
import "./index.scss";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const handleAddItemFromCart = () => dispatch(addItem(cartItem));
  const handleRemoveItemFromCart = () => dispatch(removeItem(cartItem));
  const handleClearItemFromCart = () => dispatch(clearItemFromCart(cartItem));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItemFromCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItemFromCart}>
        &#10005;
      </div>
    </div>
  );
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CheckoutItem;
