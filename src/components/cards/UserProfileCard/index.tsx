import {
	Container,
	InformationContainer,
	InformationLabel,
	InformationValue,
} from './styles';
import { getRole, putCNPJMask, putCPFMask } from '../../../utils';
import { IAdmin } from '../../../interfaces/IAdmin';
import { IClient } from '../../../interfaces/IClient';

export const UserProfileCard = () => {
	const user: IAdmin | IClient = JSON.parse(localStorage.getItem('@user')!);
	const role = getRole();
	const userProfile = {
		Administrador: (
			<Container>
				<InformationContainer>
					<InformationLabel>Nome</InformationLabel>
					<InformationValue>{(user as IAdmin).nome}</InformationValue>
				</InformationContainer>
				<InformationContainer>
					<InformationLabel>Email</InformationLabel>
					<InformationValue>
						{(user as IAdmin).email}
					</InformationValue>
				</InformationContainer>
				<InformationContainer>
					<InformationLabel>CPF</InformationLabel>
					<InformationValue>
						{putCPFMask((user as IAdmin).cpf)}
					</InformationValue>
				</InformationContainer>
				<InformationContainer>
					<InformationLabel>Telefone</InformationLabel>
					<InformationValue>
						{(user as IAdmin).telefone}
					</InformationValue>
				</InformationContainer>
			</Container>
		),
		Cliente: (
			<Container>
				<InformationContainer>
					<InformationLabel>Nome</InformationLabel>
					<InformationValue>
						{(user as IClient).nomeResponsavel}
					</InformationValue>
				</InformationContainer>
				<InformationContainer>
					<InformationLabel>Email</InformationLabel>
					<InformationValue>
						{(user as IClient).email}
					</InformationValue>
				</InformationContainer>
				<InformationContainer>
					<InformationLabel>CPF</InformationLabel>
					<InformationValue>
						{putCPFMask((user as IClient).cpfResponsavel)}
					</InformationValue>
				</InformationContainer>
				<InformationContainer>
					<InformationLabel>Razão social</InformationLabel>
					<InformationValue>
						{(user as IClient).razaoSocial}
					</InformationValue>
				</InformationContainer>
				<InformationContainer>
					<InformationLabel>CNPJ</InformationLabel>
					<InformationValue>
						{putCNPJMask((user as IClient).cnpj)}
					</InformationValue>
				</InformationContainer>
				<InformationContainer>
					<InformationLabel>Inscrição estadual</InformationLabel>
					<InformationValue>
						{(user as IClient).inscricaoEstadual}
					</InformationValue>
				</InformationContainer>
			</Container>
		),
	};
	return userProfile[role];
};
