import { fireEvent, render, screen} from '@testing-library/react';
import { it, expect, vi} from 'vitest';
import { SelectInputFilter, SelectInputFilterProps } from './select-input-filter';
import { MISDEMEANOUR_FORM_OPTIONS, MISDEMEANOUR_FORM_OPTION_VALUES } from '../../data/confession_form_data';
it('displays form label Filter when rendering filter misdemeanours form', () => {

	const requiredProps : SelectInputFilterProps = {
		title: "Filter",
		role: "filterMisdemeanours",
		value: "lift",
		onChange: () => {},
		errorMessage: "",
		attempted: false,
		options: MISDEMEANOUR_FORM_OPTIONS, 
        optionValues: MISDEMEANOUR_FORM_OPTION_VALUES,
		routeTo: {paramKind: "lift"}
	};
	render(<SelectInputFilter {...requiredProps}/>);

	const labelText = screen.getByText("Filter");
	expect(labelText).toBeInTheDocument();
});

it('displays select input field when rendering filter misdemeanours form', () => {
    //Arrange
	const requiredProps : SelectInputFilterProps = {
		title: "Filter",
		role: "filterMisdemeanours",
		value: "vegetables",
		onChange: () => {},
		errorMessage: "",
		attempted: false,
		options: MISDEMEANOUR_FORM_OPTIONS, 
        optionValues: MISDEMEANOUR_FORM_OPTION_VALUES,
		routeTo: {paramKind: "vegetables"}
	};
	//Act
	render(<SelectInputFilter {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("Filter");
	//Assert
    expect(selectInput).toBeInTheDocument();
});

it('displays value united in filter misdemeanours form input field ', () => {
    //Arrange
	const requiredProps : SelectInputFilterProps = {
		title: "Filter",
		role: "filterMisdemeanours",
		value: "united",
		onChange: () => {},
		errorMessage: "",
		attempted: false,
		options: MISDEMEANOUR_FORM_OPTIONS, 
        optionValues: MISDEMEANOUR_FORM_OPTION_VALUES,
		routeTo: {paramKind: "united"}
	};
	//Act
	render(<SelectInputFilter {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("Filter");
	//Assert
	expect(selectInput.value).toBe("united");
});

it('calls onChange function when user selects option vegetables', () => {
    //Arrange
	const mockChange = vi.fn();
	const requiredProps : SelectInputFilterProps = {
		title: "Filter",
		role: "filterMisdemeanours",
		value: "vegetables",
		onChange: mockChange,
		errorMessage: "",
		attempted: false,
		options: MISDEMEANOUR_FORM_OPTIONS, 
        optionValues: MISDEMEANOUR_FORM_OPTION_VALUES,
		routeTo: {paramKind: "vegetables"}
	};
	//Act
	render(<SelectInputFilter {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Filter");
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'vegetables'}})
	}
	//Assert
	expect(mockChange).toBeCalled();
});