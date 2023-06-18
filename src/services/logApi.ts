import { AxiosResponse } from 'axios';
import { ILog } from '../interfaces/ILog';
import { api } from '.';

async function getLog(userId: string): Promise<ILog[]> {
	const response = await api.get<unknown, AxiosResponse<ILog[]>>(
		`/log/${userId}`,
	);
	return response.data;
}

export default {
	getLog,
};
