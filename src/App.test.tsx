import React from 'react';
import {render, screen} from '@testing-library/react';
import FormInit from './components/form-init/FormInit';

test('renders learn react link', () => {
  render(<FormInit/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
