import { useQuery } from '@tanstack/react-query';
import { tokenApi } from '../services';

export const useGetTokenPlayground = () => {
	const { isLoading, error, data, refetch } = useQuery(
		['tokenPlayground'],
		async () => {
			const userId = localStorage.getItem('@user/id');
			const response = await tokenApi.getTokenPlayground(userId!);
			return [response];
		},
	);

	return {
		isLoading,
		error,
		data,
		refetch,
	};
};
