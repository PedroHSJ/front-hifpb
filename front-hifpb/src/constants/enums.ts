import { IPicker } from '../interfaces/IPicker';

export const userTypes: IPicker[] = [
	{
		key: 0,
		label: 'Administrador',
	},
	{
		key: 1,
		label: 'Cliente',
	},
];

export const userStatus: IPicker[] = [
	{
		key: 0,
		label: 'Ativo',
	},
	{
		key: 1,
		label: 'Pendente',
	},
	{
		key: 2,
		label: 'Inativo',
	},
];
