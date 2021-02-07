import { render, screen } from '@testing-library/react';
import PostBar from './../index';

describe('PostBar', () => {
    it('renders without crashing', () => {
        render(<PostBar />);
        const searchElement = screen.getByPlaceholderText('Search');
        expect(searchElement).toBeInTheDocument();
    });
});
