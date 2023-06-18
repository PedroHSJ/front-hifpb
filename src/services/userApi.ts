import { AxiosResponse } from 'axios';
import { IClient } from '../interfaces/IClient';
import { api } from '.';
import { IAdmin } from '../interfaces/IAdmin';
import { IClientValidate } from '../interfaces/IClientValidate';

async function getAllClient(): Promise<IClient[]> {
	const response = await api.get<unknown, AxiosResponse<IClient[]>>(
		'/cliente/clientes',
	);
	return response.data;
}

async function getPendingClient(): Promise<IClient[]> {
	const response = await api.get<unknown, AxiosResponse<IClient[]>>(
		'/cliente/clientesPendentes',
	);
	return response.data;
}

async function getClientById(userId: string): Promise<IClient> {
	const response = await api.get<unknown, AxiosResponse<IClient>>(
		`/cliente/${userId}`,
	);
	return response.data;
}

async function getAdminById(userId: string): Promise<IAdmin> {
	const response = await api.get<unknown, AxiosResponse<IAdmin>>(
		`/administrador/${userId}`,
	);
	return response.data;
}

async function createClient(client: IClient): Promise<string> {
	const response = await api.post<unknown, AxiosResponse<string>>(
		'/cliente/adicionar',
		client,
	);
	return response.data;
}

async function createAdmin(admin: IAdmin): Promise<string> {
	const response = await api.post<unknown, AxiosResponse<string>>(
		'/administrador/adicionar',
		admin,
	);
	return response.data;
}

async function updateClient(client: IClient): Promise<string> {
	const response = await api.put<unknown, AxiosResponse<string>>(
		`/cliente/editar/${client.id}`,
		client,
	);
	return response.data;
}

async function updateClientContract(
	formValidate: IClientValidate,
): Promise<void> {
	const dateForISO = (formValidate.dataValidade as Date).toISOString();
	const response = await api.put<unknown, AxiosResponse<void>>(
		`/cliente/editarContratoCliente/`,
		{ ...formValidate, dataValidade: dateForISO },
	);
	return response.data;
}

export default {
	getAllClient,
	getPendingClient,
	getClientById,
	getAdminById,
	createClient,
	createAdmin,
	updateClient,
	updateClientContract,
};
