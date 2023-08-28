module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@services': './src/services',
            '@styles': './src/styles',
            '@assets': './src/assets',
            '@utils': './src/utils',
          },
        }
      ]
    ]
  };
};
