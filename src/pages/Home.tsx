import { Text, View, StyleSheet } from "react-native";
import { useRNTheme } from "../../theme/RNThemeProvider";
import colors from "../../theme/ThemeColors/color";
import ThemeToggle from "../components/theme-toggle/theme-toggle.native";

export const Home = () => {
  const { theme } = useRNTheme();
  const currentColors = colors[theme];

  return (
    <View
      style={[styles.container, { backgroundColor: currentColors.background }]}
    >
      <ThemeToggle
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: currentColors.primary,
        }}
      />
      <View style={styles.content}>
        <Text style={[styles.title, { color: currentColors.text }]}>
          Welcome to the Home Page!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});
