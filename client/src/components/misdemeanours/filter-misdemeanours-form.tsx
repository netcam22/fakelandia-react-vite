import { ChangeEvent} from 'react';
import { SelectInput } from '../form-components/select-input';
import { formSelectInput} 
from '../../data/filter_misdemeanour_form_data';
import { FormSelectInputObject} from '../../../types/form.types';
import { useMisdemeanourFilterContext } from '../../hooks/use_context';
import { SelectOptions } from '../../data/filter_misdemeanour_form_data';

const FilterMisdemeanoursForm = () => {

	const [selectedOption, setSelectedOption] = useMisdemeanourFilterContext();

	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		event.preventDefault();
		if (setSelectedOption) {
			setSelectedOption((currentData: SelectOptions) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
		}
	}

	return (
		<form className='filterMisdemeanoursForm'>
			{formSelectInput.map((field: FormSelectInputObject) => 
				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {""}
				value={selectedOption? selectedOption[field.role]: "all"} 
				onChange={handleChange} 
				role = {field.role} 
				options = {field.options}
				optionValues = {field.optionValues}
				attempted = {true}
				/>)
			}
		</form>	
	);
};
export default FilterMisdemeanoursForm;