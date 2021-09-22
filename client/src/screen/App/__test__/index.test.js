import * as React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../';

test('renders learn react link', () => {
  render(<App />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
