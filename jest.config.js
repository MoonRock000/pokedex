module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-gesture-handler|react-clone-referenced-element|react-native-safe-area-context)/)'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
