import { Template } from '../../components/layouts/Template';
import { H2 } from '../../components/texts/H2';
import { Paragraph } from '../../components/texts/Paragraph';
import { LogTable } from '../../components/tables/LogTable';
import { ClientsTable } from '../../components/tables/ClientsTable';
import { getRole } from '../../utils';

export const Dashboard = (): JSX.Element => {
	const role = getRole();
	return (
		<Template>
			<H2>Dashboard</H2>
			<Paragraph>
				Na tela de dashboard, o usuário poderá encontrar informações
				importantes sobre o sistema e o negócio, tais como histórico das
				últimas requisições, quantidade de acessos e validade de
				contrato. Essas informações permitirão que você tome decisões
				mais informadas e estratégicas para o seu negócio.
			</Paragraph>
			{role == 'Administrador' ? <ClientsTable /> : <LogTable />}
		</Template>
	);
};
