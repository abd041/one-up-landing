import React from 'react'
import "./ToggleSwicth.css"
import { useTheme } from '../../ThemeContext';
const ToggleSwicth = ({ isOn, handleToggle, colorOne, colorTwo }) => {
  const { theme } = useTheme(); 
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
          style={{ background: isOn ? colorOne : colorTwo }}
          className="switch-label"
          htmlFor={`switch`}
        >
          <span style={{background:theme === "dark" ? "black" :"white"}} className={`switch-button`} />
        </label>
      </>
    );
  };

export default ToggleSwicth