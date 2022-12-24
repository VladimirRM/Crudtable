import React from "react";
import "./Custominput.css";

const Custominput = ({
    placeholder,
    handleChange,
    value
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Custominput;
