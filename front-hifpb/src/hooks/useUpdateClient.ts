import { useState } from 'react';
import { userApi } from '../services';
import { IClient } from '../interfaces/IClient';

export const useUpdateClient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | any>('');
	const [isSuccess, setIsSuccess] = useState(false);

	const update = async (client: IClient) => {
		try {
			setIsLoading(true);
			await userApi.updateClient(client);
			setIsSuccess(true);
		} catch (e) {
			setError(e);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, error, isSuccess, update };
};
