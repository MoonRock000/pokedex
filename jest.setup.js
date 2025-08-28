import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('react-native-image-picker', () => ({
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
}));

// Make FlatList render synchronously in tests
const RN = require('react-native');
const React = require('react');
const OriginalFlatList = RN.FlatList;
RN.FlatList = ({ data = [], renderItem, ListEmptyComponent, ...rest }: any) => {
  const children = (data && data.length)
    ? data.map((item: any, index: number) => renderItem({ item, index }))
    : (typeof ListEmptyComponent === 'function' ? React.createElement(ListEmptyComponent) : ListEmptyComponent);
  return React.createElement(RN.View, rest, children);
};

// Render Modal children directly (no portal) to avoid teardown issues
jest.mock('react-native/Libraries/Modal/Modal', () => {
  const React = require('react');
  return ({ children }: any) => React.createElement('Modal', null, children);
});
