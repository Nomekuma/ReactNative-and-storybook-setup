const { getDefaultConfig } = require("expo/metro-config");
const { spawn } = require("child_process");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  tty: require.resolve("tty-browserify"),
};

module.exports = config;

if (process.env.STORYBOOK_ENABLED && !process.STORYBOOK_WATCHER_STARTED) {
  spawn("npx", ["sb-rn-watcher"], { stdio: "inherit", shell: true });
  process.STORYBOOK_WATCHER_STARTED = true;
}
