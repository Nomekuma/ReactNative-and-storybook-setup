module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      "@babel/plugin-transform-class-static-block", 
      "react-native-reanimated/plugin",
    ],
  };
};
