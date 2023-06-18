import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Table } from '../../../components/tables/Table';
import { Container } from './styles';
import { useGetToken } from '../../../hooks/useGetToken';
import { useViewApiKeyModal } from '../../functional/useViewApiKeyModal';
import { handleErrorMessage } from '../../../utils';

export const ApiKeyTable = (): JSX.Element => {
	const { isLoading, data, error } = useGetToken();
	const { openKeyModal, ViewApiKeyModal } = useViewApiKeyModal();

	useEffect(() => {
		if (!error) return;
		toast.error(`Erro ao buscar o token - ${handleErrorMessage(error)}`);
	}, [error]);

	return (
		<Container>
			<ViewApiKeyModal />
			<Table
				labels={[
					{
						text: 'Chave',
						objectKey: 'chave',
						mask: 'token',
					},
					{
						text: 'Criação',
						objectKey: 'dataCadastro',
						mask: 'date',
					},
					{
						text: 'Validade',
						objectKey: 'dataValidade',
						info: 'Informa o dia limite da vigência do contrato.',
						mask: 'date',
					},
					{
						text: 'Utilizada',
						objectKey: 'qtdRequisicaoUtilizada',
						info: 'Quantidade de requisições utilizadas.',
					},
					{
						text: 'Contratada',
						objectKey: 'qtdRequisicaoContratada',
					},
				]}
				data={data}
				loading={isLoading}
				onViewContent={key => openKeyModal(key)}
			/>
		</Container>
	);
};
