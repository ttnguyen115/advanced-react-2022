import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../store/actions/cartAction";
import { selectCartItemsCount } from "../../store/actions/cartAction/reselect";
import "./index.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const itemCount = selectCartItemsCount(state);
  const handleToggleCart = () => dispatch(toggleCart());

  return (
    <div className="cart-icon" onClick={handleToggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
