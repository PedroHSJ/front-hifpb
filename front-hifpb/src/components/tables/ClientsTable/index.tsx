import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useGetAllClient } from '../../../hooks/useGetAllClient';
import { Table } from '../Table';
import { Container } from './styles';
import { handleErrorMessage } from '../../../utils';

export const ClientsTable = () => {
	const { isLoading, data, error } = useGetAllClient();

	useEffect(() => {
		if (!error) return;
		toast.error(
			`Erro ao buscar os clientes - ${handleErrorMessage(error)}`,
		);
	}, [error]);

	return (
		<Container>
			<Table
				labels={[
					{ text: 'Nome', objectKey: 'nomeResponsavel' },
					{ text: 'CPF', objectKey: 'cpfResponsavel', mask: 'cpf' },
					{ text: 'CNPJ', objectKey: 'cnpj', mask: 'cnpj' },
					{ text: 'Email', objectKey: 'email' },
				]}
				data={data}
				loading={isLoading}
				onViewContent={() => {}}
			/>
		</Container>
	);
};
