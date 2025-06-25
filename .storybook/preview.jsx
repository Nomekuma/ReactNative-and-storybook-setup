import { View, Text, Pressable } from "react-native";
import { useRNTheme, RNThemeProvider } from "../theme/RNThemeProvider";
import colors from "../theme/ThemeColors/color";
import { useState } from "react";


export const decorators = [
  (Story, { parameters }) => {
    const [currentTheme, setCurrentTheme] = useState("light");

    return (
      <RNThemeProvider theme={currentTheme}>
        <ThemeProviderWrapper
          Story={Story}
          parameters={parameters}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
      </RNThemeProvider>
    );
  },
];

const ThemeProviderWrapper = ({
  Story,
  parameters,
  currentTheme,
  setCurrentTheme,
}) => {
  const { theme, setTheme } = useRNTheme();

  // Override setTheme to also update the decorator's state
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  // Create a modified theme context
  const modifiedThemeContext = {
    theme,
    setTheme: handleThemeChange,
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          parameters.noBackground === true
            ? undefined
            : colors[theme].background,
        padding: 10,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          handleThemeChange(newTheme);
          console.log(`Theme changed to ${newTheme}`);
        }}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: 8,
          backgroundColor: colors[theme].primary,
          borderRadius: 20,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 18 }}>{theme === "dark" ? "🌞" : "🌙"}</Text>
      </Pressable>
      <Story />
    </View>
  );
};
