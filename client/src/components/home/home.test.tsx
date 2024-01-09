import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi} from 'vitest';
import Home from './home';
import { BrowserRouter } from 'react-router-dom';

it('renders home title', () => {
	render(<BrowserRouter><Home /></BrowserRouter>);
	const homeTitle = screen.getByText(/Home/);
	expect(homeTitle).toBeInTheDocument();
});

describe('test date is rendered correctly on home page', () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.useRealTimers()
	}) 
	it('converts date to string as expected', () => {
	const date = new Date(2024, 0, 7);
	vi.setSystemTime(date);
	const dateString = date.toDateString();

	expect(dateString).toEqual("Sun Jan 07 2024");
	});

	it('shows correct month, and year as expected on home page', () => {
		const date = new Date(2023, 0, 22);
		vi.setSystemTime(date);

		render(<BrowserRouter><Home /></BrowserRouter>);

		const year = screen.getByText(/2023/);
		const month = screen.getByText(/Jan/);
		expect(year).toBeInTheDocument();
		expect(month).toBeInTheDocument();
	});

	it('shows correct month, year, date and day as expected on home page', () => {
		const date = new Date(2025, 3, 15);
		vi.setSystemTime(date);

		render(<BrowserRouter><Home /></BrowserRouter>);

		const year = screen.getByText(/2025/);
		const month = screen.getByText(/Apr/);
		const day = screen.getByText(/15/);
		expect(year).toBeInTheDocument();
		expect(month).toBeInTheDocument();
		expect(day).toBeInTheDocument();
	});
})