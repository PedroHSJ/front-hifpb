import { InputHTMLAttributes, useCallback, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import {
	Control,
	FieldValue,
	FieldValues,
	useController,
	useForm,
} from 'react-hook-form';
import {
	InputContainer,
	Label,
	OptionsContainer,
	OptionButton,
	TextError,
} from './styles';
import { useTheme } from 'styled-components';

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

export const BooleanInput = ({
	name,
	label,
	control,
	error,
}: IInputProps): JSX.Element => {
	const [isCheck, setIsCheck] = useState<boolean | undefined>();
	const [isDontCheck, setIsDontCheck] = useState<boolean | undefined>();
	const { colors } = useTheme();
	const form = useForm();
	const { field } = useController({
		name,
		control: control || form.control,
		defaultValue: '',
	});

	const handleChangeValue = useCallback(
		(value: boolean) => {
			setIsCheck(value);
			setIsDontCheck(!value);
			field.onChange(value);
		},
		[field],
	);

	return (
		<InputContainer>
			<Label>{label}</Label>
			<OptionsContainer>
				<OptionButton
					type="button"
					isCheck={isCheck}
					onClick={() => handleChangeValue(true)}>
					<AiOutlineCheckCircle size={30} color={colors?.success} />
					Sim
				</OptionButton>
				<OptionButton
					type="button"
					isCheck={isDontCheck}
					onClick={() => handleChangeValue(false)}>
					<AiOutlineCloseCircle size={30} color={colors?.error} />
					Não
				</OptionButton>
			</OptionsContainer>
			<TextError>{error}</TextError>
		</InputContainer>
	);
};
