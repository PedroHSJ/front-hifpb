export interface IClientValidate {
	clienteId?: string;
	qtdRequisicaoContratada: number;
	dataValidade: Date | string;
	status?: number | string;
}
