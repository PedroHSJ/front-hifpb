import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Table } from '../../../components/tables/Table';
import { Container } from './styles';
import { useGetLog } from '../../../hooks/useGetLog';
import { handleErrorMessage } from '../../../utils';

export const LogTable = (): JSX.Element => {
	const { isLoading, error, data } = useGetLog();

	useEffect(() => {
		if (!error) return;
		toast.error(`Erro ao buscar os logs - ${handleErrorMessage(error)}`);
	}, [error]);

	return (
		<Container>
			<Table
				labels={[
					{
						text: 'Endpoint',
						objectKey: 'endPoint',
						info: 'Endereço do serviço que foi requisitado',
					},
					{
						text: 'Data do acesso',
						objectKey: 'dataAcesso',
						mask: 'relativeDate',
					},
					{ text: 'Token', objectKey: 'token', mask: 'token' },
				]}
				data={data}
				loading={isLoading}
			/>
		</Container>
	);
};
