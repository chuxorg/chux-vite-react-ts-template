import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';

describe('App', () => {
    it('Renders Hello world', () => {
        // ARRANGE
        render(<WrappedApp />);
        // ACT
        /* No Act in this simple test */
        // EXPECT
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello World');
    });
    it('Renders the Not Found page', () => {
        render(
            <MemoryRouter initialEntries={['/apple']}>
                <App />
            </MemoryRouter>
        );
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Not Found');
    });
});
