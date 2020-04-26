import React from 'react';
import { render } from '@testing-library/react';
import App from './form';

test('renders learn react link', () => {
  const Component = render(<App />);
  expect(Component).toMatchSnapshot()
});
