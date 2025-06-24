export default ({ config }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  userInterfaceStyle: "automatic",

  extra: {
    storybookEnabled: process.env.STORYBOOKa_ENABLED ?? "false",
  },
});
