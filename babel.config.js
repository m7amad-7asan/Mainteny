module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        'root': ['./'],
        'alias': {
          '@Components': './src/components',
          '@Assets': './src/assets',
          '@Core': './src/core',
          '@Navigation': './src/navigation',
          '@Screens': './src/screens',
          '@Theme': './src/theme',
          '@Store': './src/store',
          '@App': './src/app',
          '@Hooks': './src/hooks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
