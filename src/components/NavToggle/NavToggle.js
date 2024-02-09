import React from "react";
import "./NavToggle.css";

const NavToggle = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label
        className={isOn ? "switch-label switch-one" : "switch-label switch-two"}
        htmlFor={`switch`}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};

export default NavToggle;
