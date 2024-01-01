import { render, screen } from '@testing-library/react';
import { it, expect} from 'vitest';
import { SelectOption, SelectOptionProps } from './select-option';

it('displays option for select element', () => {

	const requiredProps: SelectOptionProps = {
		option: "I just want to talk",
        optionValue: "just-talk"
	}

	render(<SelectOption {...requiredProps}/>);
	
	const option = screen.getByRole("option");
    expect(option).toBeInTheDocument();
});

it('displays option I just want to talk when form is rendered', () => {

	const requiredProps: SelectOptionProps = {
		option: "I just want to talk",
        optionValue: "just-talk"
	}

	render(<SelectOption {...requiredProps}/>);
	
	const option = screen.getByRole("option");
    expect(option.innerHTML).toBe("I just want to talk");
});