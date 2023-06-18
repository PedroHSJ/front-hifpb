import { useDialog } from '../../functional/useDialog';
import { Container } from './styles';
import { useAuth } from '../../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../Menu';
import { LogoutButton } from '../../buttons/LogoutButton';

export const SideBar = (): JSX.Element => {
	const navigate = useNavigate();
	const { logout } = useAuth();
	const { Dialog, dialog } = useDialog();

	const handleLogout = () => {
		logout();
		navigate('/landing');
	};

	const handleConfirmLogout = () => {
		dialog('Sair do sistema', 'Deseja realizar logout do sistema?', [
			{ text: 'Não', onPress: () => {} },
			{
				text: 'Sim',
				onPress: handleLogout,
			},
		]);
	};

	return (
		<Container>
			<Dialog />
			<Menu />
			<LogoutButton onClick={handleConfirmLogout}>Sair</LogoutButton>
		</Container>
	);
};
