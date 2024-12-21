import React,  { useState, createContext } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode: () => setDarkMode(!darkMode) }}>
        {children}
      </ThemeContext.Provider>
    );
  };