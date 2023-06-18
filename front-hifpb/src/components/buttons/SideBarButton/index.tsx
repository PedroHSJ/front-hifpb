import { useLocation } from 'react-router-dom';
import { RxDotFilled } from 'react-icons/rx';
import { Container, Label, ActiveLabel } from './styles';

interface IMenuButtonProps {
	label: string;
	path: string;
}

export const SideBarButton = ({
	label,
	path,
}: IMenuButtonProps): JSX.Element => {
	const location = useLocation();

	return (
		<Container to={path}>
			{location.pathname == path ? (
				<ActiveLabel>
					{label}
					<RxDotFilled />
				</ActiveLabel>
			) : (
				<Label>{label}</Label>
			)}
		</Container>
	);
};
