import { useState } from 'react';
import { userApi } from '../services';
import { IClientValidate } from '../interfaces/IClientValidate';

export const useUpdateContract = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | any>('');
	const [isSuccess, setIsSuccess] = useState(false);

	const updateContract = async (formValidate: IClientValidate) => {
		console.log('Chamada do update, success: ', isSuccess);
		try {
			setIsSuccess(false); // necessário, pois o estado persistia e gerava um bug depois do primeiro uso
			setIsLoading(true);
			setError('');
			await userApi.updateClientContract(formValidate);
			setIsSuccess(true);
		} catch (e) {
			setIsSuccess(false);
			setError(e);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, error, isSuccess, updateContract };
};
