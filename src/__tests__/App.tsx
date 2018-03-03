import 'react-native';
import * as React from 'react';
import App from '../native/index';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

describe('app runs correctly', () => {
  test('renders correctly', () => {
    expect(() => {
      renderer.create(<App />);
    }).not.toThrow();
  });
});
