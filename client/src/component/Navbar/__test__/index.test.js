import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Navbar from '../';

test('render Navbar', () => {
  const { container } = render(<Navbar />);
  expect(container).toBeInTheDocument();
});

test('render Navbar icons', () => {
  render(<Navbar />);

  const searchBtn = screen.getByLabelText(/user search bar/);
  expect(searchBtn).toBeInTheDocument();

  const cartBtn = screen.getByLabelText(/user cart/);
  expect(cartBtn).toBeInTheDocument();

  const brandAvatar = screen.getByRole('img');
  expect(brandAvatar).toBeInTheDocument();
});

// test the badge number of the cart
// this test needs to make a fetch, and test it first.
// test('test cart badge number', () => {});
