import React from "react";
import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const labelStyle = otherProps.value.length > 0 ? "shrink form-input-label" : "form-input-label";
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? <label className={labelStyle}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
