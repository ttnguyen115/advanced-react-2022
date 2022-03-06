import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  return (
    <Link
      className={`${size || ""} directory-menu_item`}
      to={linkUrl}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </Link>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
};

export default MenuItem;
