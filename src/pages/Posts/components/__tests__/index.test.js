import { render, screen } from '@testing-library/react';
import PostBar from './../index';

describe('PostBar', () => {
    it('find element with arialabel hot', () => {
        render(<PostBar />);
        const searchElement = screen.getByLabelText('hot');
        expect(searchElement).toBeInTheDocument();
    });

    it('find element with arialabel hot', () => {
        render(<PostBar />);
        const searchElement = screen.getByLabelText('hot');
        expect(searchElement).toBeInTheDocument();
    });

    it('find element with arialabel top', () => {
        render(<PostBar />);
        const searchElement = screen.getByLabelText('top');
        expect(searchElement).toBeInTheDocument();
    });
});
