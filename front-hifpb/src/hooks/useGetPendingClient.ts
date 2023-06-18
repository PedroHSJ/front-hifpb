import { useQuery } from '@tanstack/react-query';
import { userApi } from '../services';

export const useGetPendingClient = () => {
	const { isLoading, error, data, refetch } = useQuery(
		['pendingClients'],
		async () => {
			const response = await userApi.getPendingClient();
			return response;
		},
	);

	return {
		isLoading,
		error,
		data,
		refetch,
	};
};
