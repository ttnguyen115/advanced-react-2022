import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCart } from "../../store/actions/cartAction";
import CartItem from "../CartItem";
import CustomButton from "../CustomButton";
import "./index.scss";

function Cart(props) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleRouteToCheckoutPage = () => {
    navigate("/checkout");
    dispatch(toggleCart());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleRouteToCheckoutPage}>
        Go to checkout
      </CustomButton>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
