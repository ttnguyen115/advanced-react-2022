import PropTypes from "prop-types";
import React from "react";
import "./index.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...buttonProps }) {
  return (
    <button
      className={`
        ${isGoogleSignIn ? "google-sign-in" : ""} 
        ${inverted ? "inverted" : ""} 
        custom-button`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default React.memo(CustomButton);
