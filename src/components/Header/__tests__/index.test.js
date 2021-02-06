import { render, screen } from '@testing-library/react';
import Header from './../index';

describe('Header', () => {
    it('renders without crashing', () => {
        render(<Header />);
        const searchElement = screen.getByPlaceholderText('Search');
        expect(searchElement).toBeInTheDocument();
    });
});
