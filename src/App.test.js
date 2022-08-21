import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bridge Game/i);
  expect(linkElement).toBeInTheDocument();
});
