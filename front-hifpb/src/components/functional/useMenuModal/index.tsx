import { useState } from 'react';
import { useAuth } from '../../../hooks/auth';
import { useDialog } from '../useDialog';
import { Container, Content } from './styles';
import { Menu } from '../../layouts/Menu';
import { LogoutButton } from '../../buttons/LogoutButton';

export const useMenuModal = () => {
	const [isVisible, setIsVisible] = useState(false);

	const openMenuModal = () => {
		setIsVisible(true);
	};

	const handleClose = () => {
		setIsVisible(false);
	};

	const MenuModal = () => {
		const { dialog, Dialog } = useDialog();
		const { logout } = useAuth();

		const handleLogout = () => {
			dialog('Sair do sistema', 'Deseja realizar logout do sistema?', [
				{ text: 'Não', onPress: () => {} },
				{ text: 'Sim', onPress: logout },
			]);
		};

		if (!isVisible) return <></>;
		return (
			<Container onClick={handleClose}>
				<Dialog />
				<Content onClick={e => e.stopPropagation()}>
					<Menu />
					<LogoutButton onClick={handleLogout}>Sair</LogoutButton>
				</Content>
			</Container>
		);
	};

	return {
		openMenuModal,
		MenuModal,
	};
};
