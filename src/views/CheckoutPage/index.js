import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeCheckoutButton";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/actions/cartAction/reselect";
import "./index.scss";

function CheckoutPage(props) {
  const state = useSelector((state) => state);
  const cartItems = selectCartItems(state);
  const totalPrice = selectCartTotal(state);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <div className="test-warning">
        *Please use the following test case credit card for payments
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
