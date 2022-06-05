import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input filed and treelist', () => {
  render(<App />);
  expect(screen.getByLabelText(/insert here your input data/i)).toBeInTheDocument();
  expect(screen.getByTestId('tree-list')).toBeInTheDocument();
});
