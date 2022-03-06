import React from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../store/actions/cartAction";
import { ReactComponent as ShoppingIcon } from "../shopping-bag.svg";
import "./index.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const handleToggleCart = () => dispatch(toggleCart());

  return (
    <div className="cart-icon" onClick={handleToggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
