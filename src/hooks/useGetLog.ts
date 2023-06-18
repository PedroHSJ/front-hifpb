import { useQuery } from '@tanstack/react-query';
import { logApi } from '../services';

export const useGetLog = () => {
	const { isLoading, error, data } = useQuery(['logs'], async () => {
		const userId = localStorage.getItem('@user/id');
		const response = await logApi.getLog(userId!);
		return response;
	});

	return {
		isLoading,
		error,
		data,
	};
};
