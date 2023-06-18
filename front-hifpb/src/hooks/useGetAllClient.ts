import { useQuery } from '@tanstack/react-query';
import { userApi } from '../services';
import { putCNPJMask, putCPFMask } from '../utils';

export const useGetAllClient = () => {
	const { isLoading, error, data } = useQuery(['allClients'], async () => {
		const response = await userApi.getAllClient();
		response.filter(client => {
			client.cpfResponsavel = putCPFMask(client.cpfResponsavel);
			client.cnpj = putCNPJMask(client.cnpj);
		});
		return response;
	});

	return {
		isLoading,
		error,
		data,
	};
};
