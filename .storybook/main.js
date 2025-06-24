/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/components/**/*.native.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-controls",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
