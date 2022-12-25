import React from "react";
import "./Custominput.css";

const Custominput = ({
    placeholder,
    handleChange,
    value,
    filedName
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e)=>handleChange(e,filedName)}
        value={value}
      />
    </div>
  );
};

export default Custominput;
