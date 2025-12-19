import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  test('renders hero section with correct content', () => {
    render(<Hero />);
    
    expect(screen.getByText('Full-Stack')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Download Résumé')).toBeInTheDocument();
  });

  test('renders portrait image', () => {
    render(<Hero />);
    
    const image = screen.getByAltText('Sreejith Portrait');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});
