import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Homepage from '../components/homepage';
import { BrowserRouter } from 'react-router-dom';

describe('Homepage Component', () => {
    it('renders the welcome heading', () => {
        render(
            <BrowserRouter>
                <Homepage />
            </BrowserRouter>
        );
        const heading = screen.getByText(/Shop the Best Products/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders the shop now button', () => {
        render(
            <BrowserRouter>
                <Homepage />
            </BrowserRouter>
        );
        const button = screen.getByRole('button', { name: /Shop Now/i });
        expect(button).toBeInTheDocument();
    });
});
