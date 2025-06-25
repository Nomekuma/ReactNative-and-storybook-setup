import { View } from "react-native";

/** @type {import("@storybook/react").Preview} */
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, { parameters }) => (
    <View
      style={{
        flex: 1,
        backgroundColor:
          parameters.noBackground === true ? undefined : "white",
        padding: 10,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Story />
    </View>
  ),
];
