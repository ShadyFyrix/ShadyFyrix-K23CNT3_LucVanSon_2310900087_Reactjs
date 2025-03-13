import React from "react";
import { useTheme } from "../context/LvsThemeContext";

const LvsThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn btn-secondary mt-3" onClick={toggleTheme}>
      Chuyển sang {theme === "light" ? "Tối" : "Sáng"}
    </button>
  );
};

export default LvsThemeToggle;
