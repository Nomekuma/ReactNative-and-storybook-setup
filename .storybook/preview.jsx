import { View } from "react-native";

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => (
      <View
        style={{
          flex: 1,
          backgroundColor:
            parameters.noBackground === true ? undefined : "#004560",
          padding: 10,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default preview;
