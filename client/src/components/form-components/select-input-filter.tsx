import { ChangeEventHandler} from 'react';
import { SelectOption } from "./select-option";
import { ErrorMessage } from './error-message';
import { SelectOptions } from '../../data/filter_misdemeanour_form_data';
import useSelectFilter from '../../hooks/use_select_filter';
import { SelectInputProps } from './select-input';

export interface SelectInputFilterProps extends SelectInputProps{
	onChange: ChangeEventHandler<HTMLSelectElement>;
	options: Array<string>;
	optionValues: Array<string>;
	routeTo: SelectOptions | undefined;
}

export const SelectInputFilter : React.FC<SelectInputFilterProps> = (props) => {

	const filter = useSelectFilter(props.value, props.routeTo?.paramKind);

	return (
    <>
        <label className='form__label'
		htmlFor={props.role}>{props.title}</label>
        <select className='form__input'
			id={props.role} value={filter} 
			onChange={props.onChange}  >
			{props.options.map((option, index) => 
			<SelectOption key = {index.toString()}
			option ={option} optionValue ={props.optionValues[index]} />)}
		</select>
        {props.attempted && props.errorMessage !== "" &&
		<ErrorMessage message = {props.errorMessage}/>
		}
    </> )
}