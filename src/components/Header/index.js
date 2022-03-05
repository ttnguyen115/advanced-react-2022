import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./index.scss";

function Header(props) {
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
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default React.memo(Header);
