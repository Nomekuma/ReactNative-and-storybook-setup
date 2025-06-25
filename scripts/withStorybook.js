const { spawnSync } = require("child_process");
const path = require("path");

function withStorybook(config, options = {}) {
  const {
    enabled = true,
    configPath = path.resolve(process.cwd(), "./.storybook"),
    useJs = false,
  } = options;

  if (!enabled) {
    return config;
  }

  const args = ["sb-rn-get-stories", "-c", configPath];
  if (useJs) args.push("--use-js");
  spawnSync("npx", args, { stdio: "inherit", shell: true });

  return {
    ...config,
    transformer: {
      ...config.transformer,
      unstable_allowRequireContext: true,
    },
    resolver: {
      ...config.resolver,
      resolveRequest: (context, moduleName, platform) => {
        const resolveFn =
          config?.resolver?.resolveRequest || context.resolveRequest;
        const isStorybookModule =
          moduleName.startsWith("storybook") ||
          moduleName.startsWith("@storybook");
        const ctx = isStorybookModule
          ? {
              ...context,
              unstable_enablePackageExports: true,
              unstable_conditionNames: ["import"],
            }
          : context;
        return resolveFn(ctx, moduleName, platform);
      },
    },
  };
}

module.exports = withStorybook;
