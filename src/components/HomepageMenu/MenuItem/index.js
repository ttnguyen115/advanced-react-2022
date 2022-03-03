import PropTypes from "prop-types";
import React from "react";
import "./index.scss";

function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`${size || ""} directory-menu_item`}>
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
    </div>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default MenuItem;
