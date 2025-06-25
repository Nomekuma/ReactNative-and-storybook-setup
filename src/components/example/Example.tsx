import { Text, View } from "react-native";
import { useRNTheme } from "@/theme/RNThemeProvider"; // Adjust the import path as necessary
import colors from "@/theme/ThemeColors/color";

export const Example = () => {
  const { theme } = useRNTheme();

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: colors[theme as keyof typeof colors].background,
        borderRadius: 8,
        margin: 10,
      }}
    >
      <Text
        style={{
          color: colors[theme as keyof typeof colors].text,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Example Component
      </Text>
      <Text
        style={{
          color: colors[theme as keyof typeof colors].text,
          fontSize: 14,
          marginTop: 8,
        }}
      >
        Current theme: {theme}
      </Text>
      <Text
        style={{
          color: colors[theme as keyof typeof colors].secondary,
          fontSize: 12,
          marginTop: 4,
        }}
      >
        This component adapts to the theme!
      </Text>
    </View>
  );
};
