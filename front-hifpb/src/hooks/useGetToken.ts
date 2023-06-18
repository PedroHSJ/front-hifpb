import { useQuery } from '@tanstack/react-query';
import { tokenApi } from '../services';

export const useGetToken = () => {
	const { isLoading, error, data } = useQuery(['tokenApi'], async () => {
		const userId = localStorage.getItem('@user/id');
		const response = await tokenApi.getToken(userId!);
		return [response];
	});

	return {
		isLoading,
		error,
		data,
	};
};
