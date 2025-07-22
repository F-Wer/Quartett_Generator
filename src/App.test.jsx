import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders main header', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Quartett-Karten-Ersteller/i });
  expect(heading).toBeInTheDocument();
});
