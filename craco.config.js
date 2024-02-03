const CracoAliasPlugin = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        // Your alias configurations, if needed
      },
    },
  ],
  webpack: {
    configure: (
      webpackConfig,
      { env, paths }
    ) => {
      module.exports = {
        // Other configuration options...

        resolve: {
          fallback: {
            os: require.resolve(
              "os-browserify/browser"
            ),
          },
        },
      };
      // Example:
      // webpackConfig.resolve.fallback = { "os": require.resolve("os-browserify/browser") };
      return webpackConfig;
    },
  },
};
