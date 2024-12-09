import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

/*   it('updates count when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button');
    
    expect(button).toHaveTextContent('count is 0');
    
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  }); */
}); 