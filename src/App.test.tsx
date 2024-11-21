import React from 'react';
import { render, screen } from '@testing-library/react';
import InitForm from './InitForm';

test('renders learn react link', () => {
  render(<InitForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
