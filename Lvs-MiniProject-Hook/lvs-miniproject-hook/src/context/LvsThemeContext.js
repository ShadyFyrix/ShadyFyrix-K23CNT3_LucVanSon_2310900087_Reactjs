import React, { createContext, useState, useContext } from "react";

const LvsThemeContext = createContext();

export const LvsThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <LvsThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </LvsThemeContext.Provider>
  );
};

export const useTheme = () => useContext(LvsThemeContext);
