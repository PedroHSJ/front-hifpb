import { Table } from '../Table';
import { Container } from './styles';

export const DataDictionaryTable = () => {
	return (
		<Container>
			<Table
				labels={[
					{ text: 'Campo', objectKey: 'field' },
					{ text: 'Tipo', objectKey: 'type' },
					{ text: 'Descrição', objectKey: 'description' },
				]}
				data={[
					{
						id: 'a',
						field: 'chaveApi',
						type: 'string',
						description: 'Chave única do token de usuário.',
					},
					{
						id: 'b',
						field: 'id',
						type: 'number',
						description: 'Identificador único para o paciente.',
					},
					{
						id: 'c',
						field: 'cid',
						type: 'string',
						description:
							'Código da Classificação Internacional de Doenças.',
					},
					{
						id: 'd',
						field: 'imc',
						type: 'double',
						description: 'Índice de Massa Corporal.',
					},
					{
						id: 'e',
						field: 'sexo',
						type: 'string',
						description: 'Gênero do paciente por extenso.',
					},
					{
						id: 'f',
						field: 'colesterolTotal',
						type: 'double',
						description: 'Colesterol do paciente.',
					},
					{
						id: 'g',
						field: 'hdl',
						type: 'double',
						description:
							'Colesterol de lipoproteína de alta densidade.',
					},
					{
						id: 'h',
						field: 'ldl',
						type: 'double',
						description:
							'Colesterol de lipoproteína de baixa densidade.',
					},
					{
						id: 'i',
						field: 'idade',
						type: 'number',
						description: 'Idade do paciente.',
					},
					{
						id: 'j',
						field: 'hipertenso',
						type: 'boolean',
						description: 'Condição de hipertensão do paciente.',
					},
					{
						id: 'k',
						field: 'diabetico',
						type: 'boolean',
						description: 'Condição de diabetes do paciente.',
					},
					{
						id: 'l',
						field: 'tabagista',
						type: 'boolean',
						description: 'Condição de tabagista do paciente.',
					},
					{
						id: 'm',
						field: 'obeso',
						type: 'boolean',
						description: 'Condição de obesidade do paciente.',
					},
					{
						id: 'n',
						field: 'pressaoSistolica',
						type: 'double',
						description: 'Pressão sistólica do paciente.',
					},
					{
						id: 'o',
						field: 'pressaoDiastolica',
						type: 'double',
						description: 'Pressão diastólica do paciente.',
					},
					{
						id: 'p',
						field: 'risco',
						type: 'string',
						description: 'Risco classificado do paciente.',
					},
					{
						id: 'q',
						field: 'prob',
						type: 'number',
						description: 'Acurácia do resultado.',
					},
					{
						id: 'r',
						field: 'vulnerabilidade',
						type: 'boolean',
						description:
							'vulnerabilidade do paciente para contrair uma infecção hospitalar devido a sua condição.',
					},
					{
						id: 's',
						field: 'spo2',
						type: 'double',
						description:
							'Saturação Periférica de Oxigênio do paciente.',
					},
					{
						id: 't',
						field: 'temperatura',
						type: 'double',
						description: 'Temperatura do paciente.',
					},
					{
						id: 'u',
						field: 'frequenciaRespiratoria',
						type: 'double',
						description: 'Frequência respiratória do paciente.',
					},
					{
						id: 'v',
						field: 'sitioVulneravel',
						type: 'boolean',
						description:
							'Indica uma área ou localização específica no corpo do paciente que apresenta um maior risco de desenvolver infecções.',
					},
				]}
			/>
		</Container>
	);
};
