import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase";
import "./index.scss";

function Header() {
  const { user } = useSelector((state) => state);
  const currentUser = user;

  const handleSignOut = () => {
    auth.signOut();
    
  }

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
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object,
};

export default React.memo(Header);
