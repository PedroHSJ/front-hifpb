import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Table } from '../Table';
import { useGetTokenPlayground } from '../../../hooks/useGetTokenPlayground';
import { useViewApiKeyModal } from '../../functional/useViewApiKeyModal';
import { Container } from './styles';
import { handleErrorMessage } from '../../../utils';

export const ApiPlaygroundKeyTable = () => {
	const { isLoading, data, error } = useGetTokenPlayground();
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
						text: 'Utilizada',
						objectKey: 'qtdRequisicao',
						info: 'Quantidade de requisições utilizadas.',
					},
					{
						text: 'Limite',
						objectKey: 'qtdRequisicaoLimite',
						info: 'Quantidade de requisições limite.',
					},
				]}
				data={data}
				loading={isLoading}
				onViewContent={key => openKeyModal(key)}
			/>
		</Container>
	);
};
