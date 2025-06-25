const { getDefaultConfig } = require("expo/metro-config");
const { spawn } = require("child_process");
const path = require("path");
const withStorybook = require("./scripts/withStorybook");

const projectRoot = __dirname;
let config = getDefaultConfig(projectRoot);

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  tty: require.resolve("tty-browserify"),
};

config = withStorybook(config, {
  enabled: true,
  configPath: path.resolve(projectRoot, "./.storybook"),
  useJs: true,
});

module.exports = config;

if (process.env.STORYBOOK_ENABLED && !process.STORYBOOK_WATCHER_STARTED) {
  spawn("npx", ["sb-rn-watcher"], { stdio: "inherit", shell: true });
  process.STORYBOOK_WATCHER_STARTED = true;
}
