import { render, screen } from '@testing-library/react';
import App from './App';

test("renders app componet correctly", () => {
  render(<App />);
  const Title = screen.getByText(/Context and Jest/i);
  expect(Title).toBeInTheDocument();
}); 
