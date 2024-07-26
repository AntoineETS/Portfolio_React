import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// Mock components
jest.mock('./components/Header', () => ({
  __esModule: true,
  default: ({ onTabChange }) => (
    <button onClick={() => onTabChange('cv')}>Header</button>
  ),
}));
jest.mock('./components/Footer', () => ({
  __esModule: true,
  default: ({ onTabChange }) => (
    <button onClick={() => onTabChange('contact')}>Footer</button>
  ),
}));
jest.mock('./components/Home', () => () => <div>Home Component</div>);
jest.mock('./components/CV', () => () => <div>CV Component</div>);
jest.mock('./components/About', () => () => <div>About Component</div>);
jest.mock('./components/Contact', () => () => <div>Contact Component</div>);

describe('App Component', () => {
    test('renders Header and Footer components', () => {
        render(<App />);
        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    test('renders Home component by default', () => {
        render(<App />);
        expect(screen.getByText('Home Component')).toBeInTheDocument();
    });

    test('changes active tab on handleTabChange and renders the corresponding component', () => {
        render(<App />);

        // Simulate tab change to 'cv'
        fireEvent.click(screen.getByText('Header'));
        expect(screen.getByText('CV Component')).toBeInTheDocument();

        // Simulate tab change to 'contact'
        fireEvent.click(screen.getByText('Footer'));
        expect(screen.getByText('Contact Component')).toBeInTheDocument();
    });

    test('sets document title on mount', () => {
        render(<App />);
        expect(document.title).toBe('Antoine Lamontagne | Portfolio');
    });
});
