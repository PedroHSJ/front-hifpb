import { Loading } from '../../resources/Loading';
import { ButtonContainer, Label } from './styles';

interface IButtonProps {
	label: string;
	onClick?: () => void;
	loading?: boolean;
	type: 'button' | 'submit' | 'reset';
}

export const Button = ({
	label,
	onClick,
	loading,
	type,
}: IButtonProps): JSX.Element => {
	return (
		<ButtonContainer
			isLoading={loading}
			disabled={loading}
			type={type}
			onClick={onClick}>
			{loading ? <Loading /> : <Label>{label}</Label>}
		</ButtonContainer>
	);
};
