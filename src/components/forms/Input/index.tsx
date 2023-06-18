import { InputHTMLAttributes, useCallback, useRef } from 'react';
import {
	Control,
	FieldValue,
	FieldValues,
	useController,
	useForm,
} from 'react-hook-form';
import { InputContainer, Label, TextInput, TextError } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	control?: Control<FieldValue<FieldValues>>;
	editable?: boolean;
	placeholder?: string;
	disabled?: boolean;
	type: string;
	error?: string;
}

export const Input = ({
	name,
	label,
	control,
	editable,
	placeholder,
	disabled,
	type,
	error,
	...rest
}: IInputProps): JSX.Element => {
	const form = useForm();
	const { field } = useController({
		name,
		control: control || form.control,
		defaultValue: '',
	});
	const inputRef = useRef<any>(null);

	const handleChangeValue = useCallback(
		(value: string) => {
			field.onChange(value);
		},
		[field],
	);

	return (
		<InputContainer>
			<Label>{label}</Label>
			<TextInput
				ref={inputRef}
				onChange={e => handleChangeValue(e.target.value)}
				value={field.value}
				disabled={disabled}
				type={type}
				placeholder={placeholder}
				{...rest}
			/>
			<TextError>{error}</TextError>
		</InputContainer>
	);
};
