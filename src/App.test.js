import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading when isLoading', () => {
  render(<App />);
  const loadingLabel = screen.getByText('Loading...');
  expect(loadingLabel).toBeInTheDocument();
});
