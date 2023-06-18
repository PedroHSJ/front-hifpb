import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Table } from '../Table';
import { useClientValidateModal } from '../../functional/useClientValidateModal';
import { Container } from './styles';
import { useGetPendingClient } from '../../../hooks/useGetPendingClient';
import { handleErrorMessage } from '../../../utils';

export const PendingClientsTable = (): JSX.Element => {
	const { isSuccess, openClientValidateModal, ClientValidate } =
		useClientValidateModal();
	const { isLoading, error, data, refetch } = useGetPendingClient();

	useEffect(() => {
		if (!isSuccess) return;
		refetch();
	}, [isSuccess]);

	useEffect(() => {
		if (!error) return;
		toast.error(
			`Erro ao buscar os clientes pendentes - ${handleErrorMessage(
				error,
			)}`,
		);
	}, [error]);

	return (
		<Container>
			<ClientValidate />
			<Table
				labels={[
					{ text: 'Nome', objectKey: 'nomeResponsavel' },
					{ text: 'CPF', objectKey: 'cpfResponsavel', mask: 'cpf' },
					{ text: 'CNPJ', objectKey: 'cnpj', mask: 'cnpj' },
					{ text: 'Email', objectKey: 'email' },
				]}
				data={data}
				onEdit={client => openClientValidateModal(client)}
				loading={isLoading}
			/>
		</Container>
	);
};
