import { useState } from 'react';
import { userApi } from '../services';
import { IAdmin } from '../interfaces/IAdmin';
import { removeMask, toCaptalize, toLowerCase } from '../utils';

export const useCreateAdmin = () => {
	const [error, setError] = useState<string | any>('');
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [data, setData] = useState<IAdmin | undefined>();

	const createAdmin = async (admin: IAdmin) => {
		try {
			setError('');
			setIsLoading(true);
			const formatDataForAPI = {
				...admin,
				nome: toCaptalize(admin.nome),
				cpf: removeMask(admin.cpf),
				email: toLowerCase(admin.email),
				telefone: removeMask(admin.telefone),
			};
			const response = await userApi.createAdmin(formatDataForAPI);
			setData(response);
			setIsSuccess(true);
		} catch (e) {
			setIsSuccess(false);
			setError(e);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		error,
		isLoading,
		isSuccess,
		data,
		createAdmin,
	};
};
