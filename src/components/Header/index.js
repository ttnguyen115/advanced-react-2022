import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutRequest } from "../../store/actions/userAction/actions";
import Cart from "../Cart";
import CartIcon from "../CartIcon";
import "./index.scss";

function Header() {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const { currentUser } = user;
  const { isShow } = cart;

  const handleSignOut = () => dispatch(signOutRequest());

  return (
    <div className="header-wrapper">
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="header-options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="option" onClick={handleSignOut}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isShow ? <Cart /> : null}
      </div>
    </div>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object,
};

export default React.memo(Header);
