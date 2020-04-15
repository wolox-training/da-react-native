module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@constants': './src/constants',
          '@assets': './src/assets',
          '@screens': './src/app/screens',
          '@components': './src/app/components',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@config': './src/config',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@context': './src/context',
          '@interfaces': './src/interfaces'
        }
      }
    ]
  ]
};
