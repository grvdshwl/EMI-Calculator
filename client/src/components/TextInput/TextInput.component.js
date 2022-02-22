import React from "react";
import "./TextInput.styles.css";
const TextInput = (props) => {
  const { label, type, onChange, required, value } = props;
  return (
    <div className="text-input-container">
      <input
        id={`id-${label}`}
        type={type}
        onChange={onChange}
        alt={label}
        className="text-input"
        value={value}
        required={required}
      />
      <div
        className={`text-input-label-container ${
          !!value.length ? "filled" : ""
        }`}
      >
        <label htmlFor={`id-${label}`}>{label}</label>
      </div>
    </div>
  );
};

export default TextInput;
