import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import FlipCard, { FlipCardProps } from './flip-card';
import { BrowserRouter } from 'react-router-dom';

it('renders 2 as number of vegetable misdemeanours in flip card', () => {

    const requiredProps: FlipCardProps  = {
        title: "Not Eating Your Vegetables",
        count: 2,
        image: "/src/assets/images/logo.png",
        alt: "Picture of Not Eating Your Vegetables misdemeanour",
        misdemeanourType: "vegetables",
        icon: "🥗"
    }

	render(<BrowserRouter><FlipCard {...requiredProps}/></BrowserRouter>);
    const misdemeanourTitle = screen.getByText(/2/);
	expect(misdemeanourTitle).toBeInTheDocument();
});


it('renders 5 as number of vegetable misdemeanours in flip card', () => {

    const requiredProps: FlipCardProps  = {
        title: "Not Eating Your Vegetables",
        count: 5,
        image: "/src/assets/images/logo.png",
        alt: "Picture of Not Eating Your Vegetables misdemeanour",
        misdemeanourType: "vegetables",
        icon: "🥗"
    }

	render(<BrowserRouter><FlipCard {...requiredProps}/></BrowserRouter>);
    const misdemeanourCount = screen.getByText(/5/);
	expect(misdemeanourCount).toBeInTheDocument();
});

it('renders words reported today as part of information in flip card', () => {

    const requiredProps: FlipCardProps  = {
        title: "Not Eating Your Vegetables",
        count: 5,
        image: "/src/assets/images/logo.png",
        alt: "Picture of Not Eating Your Vegetables misdemeanour",
        misdemeanourType: "vegetables",
        icon: "🥗"
    }

	render(<BrowserRouter><FlipCard {...requiredProps}/></BrowserRouter>);
    const reported = screen.getByText(/reported today/);
	expect(reported).toBeInTheDocument();
});