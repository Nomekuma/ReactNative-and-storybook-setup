import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useRNTheme } from "@/theme/RNThemeProvider";
import colors from "@/theme/ThemeColors/color";
import { ThemeToggleProps } from "./theme-toggle.types";

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  toggleType = "icon",
  onToggle,
  lightThemeIcon,
  darkThemeIcon,
  lightThemeText = "Light",
  darkThemeText = "Dark",
  customToggle,
  customToggleStyle,
  style,
  ...props
}) => {
  const { theme, setTheme } = useRNTheme();
  const isDark = theme === "dark";

  const handleToggle = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
    onToggle?.(next);
  };

  let content: React.ReactNode;
  switch (toggleType) {
    case "text":
      content = (
        <Text
          style={[
            styles.text,
            { color: colors[theme as keyof typeof colors].text },
          ]}
        >
          {isDark ? lightThemeText : darkThemeText}
        </Text>
      );
      break;
    case "custom":
      content = customToggle ? (
        <View style={customToggleStyle}>{customToggle}</View>
      ) : null;
      break;
    default:
      // icon mode w/ fallback
      content = isDark
        ? lightThemeIcon ?? <Text style={styles.icon}>🌞</Text>
        : darkThemeIcon ?? <Text style={styles.icon}>🌙</Text>;
  }

  return (
    <Pressable
      onPress={handleToggle}
      style={[
        styles.button,
        { backgroundColor: colors[theme as keyof typeof colors].primary },
        style,
      ]}
      {...props}
    >
      {content}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    elevation: 2,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 18,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ThemeToggle;
