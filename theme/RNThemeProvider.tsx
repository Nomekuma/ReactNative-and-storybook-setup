import React, { createContext, useContext, useState, ReactNode } from "react";

type ThemeColors = "light" | "dark";

interface ThemeState {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
}

const initialThemeState: ThemeState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeContext = createContext<ThemeState>(initialThemeState);

export const RNThemeProvider = ({
  theme,
  children,
}: {
  theme?: ThemeColors;
  children: ReactNode;
}) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeColors>(
    theme || "light"
  );

  const handleThemeChange = (newTheme: ThemeColors) => {
    setSelectedTheme(newTheme);
  };

  const value = {
    theme: selectedTheme,
    setTheme: handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useRNTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useRNTheme must be used within a RNThemeProvider");
  }
  return context;
};
