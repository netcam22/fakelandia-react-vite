import { render, screen} from '@testing-library/react';
import { it, expect} from 'vitest';
import { MisdemeanourContainer } from './misdemeanour-container';
import { BrowserRouter } from 'react-router-dom';
it('renders misdemeanour title when misdemeanour page loads', () => {
	render(<BrowserRouter><MisdemeanourContainer /></BrowserRouter>);
	const misdemeanourTitle = screen.getByText("Misdemeanours");
	expect(misdemeanourTitle).toBeInTheDocument();
});