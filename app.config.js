export default ({ config }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  userInterfaceStyle: "automatic",
  assetBundlePatterns: ["**/*"],
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED ?? "false",
  },
});
