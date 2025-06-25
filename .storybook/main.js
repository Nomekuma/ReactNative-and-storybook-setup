/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/components/**/*.native.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-controls",
  ],
};

export default config;
