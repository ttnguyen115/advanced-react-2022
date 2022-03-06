import React from "react";
import CustomButton from "../CustomButton";
import "./index.scss";

function Cart(props) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
