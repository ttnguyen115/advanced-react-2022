import PropTypes from "prop-types";
import React from "react";
import "./index.scss";

function FormInput({ handleChange, label, ...formInputProps }) {
  const { value } = formInputProps;
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...formInputProps}
      />
      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default FormInput;
