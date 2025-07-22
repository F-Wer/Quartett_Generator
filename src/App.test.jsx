import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock heavy browser-dependent libs so tests run in jsdom
jest.mock('jspdf', () => ({ jsPDF: jest.fn() }));
jest.mock('html2canvas', () => jest.fn());
jest.mock('jszip', () => jest.fn());

test('renders main header', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Quartett-Karten-Ersteller/i });
  expect(heading).toBeInTheDocument();
});
