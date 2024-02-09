// ToggleButton.js
import React from "react";
import { useTheme } from "./ThemeContext";
import t1 from "./assets/dark/t1.png";
import t2 from "./assets/dark/t2.png";
const ToggleButton = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={theme === "dark" ? "toggle-main-wrapper" : "toggle-main-white"}
    >
      {theme === "dark" ? <img src={t1} /> : <img src={t2} />}
    </button>
  );
};

export default ToggleButton;
