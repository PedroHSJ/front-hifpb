import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../forms/Input';
import { Button } from '../../buttons/Button';
import { BackButton } from '../../buttons/BackButton';
import { Form } from '../../forms/Form';
import {
	Container,
	TopContainer,
	TitleContainer,
	Title,
	Subtitle,
	Description,
	ButtonsContainer,
} from './styles';
import { IClient } from '../../../interfaces/IClient';
import { ClientSchema } from '../../../validations/client.schema';
import { useCreateClient } from '../../../hooks/useCreateClient';
import { Row } from '../../layouts/Row';
import { useDialog } from '../../functional/useDialog';
import { handleErrorMessage } from '../../../utils';
import { CheckBoxTerm } from '../../forms/CheckBoxTerm';

export const CreateAccountCard = () => {
	const { CheckBox, isCheck } = CheckBoxTerm();
	const navigate = useNavigate();
	const { Dialog, dialog } = useDialog();
	const { isLoading, isSuccess, error, createClient } = useCreateClient();
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IClient>({ resolver: yupResolver(ClientSchema) });

	const onSubmit = (formData: IClient) => {
		if (!isCheck) {
			dialog(
				'Atenção',
				'Aceite os termos de consentimento livre primeiro',
				[{ text: 'OK', onPress: () => {} }],
			);
			return;
		}
		createClient(formData);
	};

	useEffect(() => {
		if (!error) return;
		toast.error(
			`Erro ao enviar a solicitação - ${handleErrorMessage(error)}`,
		);
	}, [error]);

	useEffect(() => {
		if (!isSuccess) return;
		reset();
		dialog(
			'Sucesso!',
			'Sua solicitação foi enviada. Aguarde enquanto analisaremos os dados. Você será redirecionado para a tela de login.',
			[
				{
					text: 'Certo!',
					onPress: () => navigate('/login'),
				},
			],
		);
	}, [isSuccess]);

	return (
		<Container>
			<Dialog />
			<TopContainer>
				<TitleContainer>
					<BackButton />
					<Title>Solicitar acesso</Title>
				</TitleContainer>
				<Subtitle>
					Para solicitar o cadastro, o usuário precisa preencher todos
					os campos obrigatórios indicados.
				</Subtitle>
			</TopContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Input
						type="text"
						name="nomeResponsavel"
						control={control}
						placeholder="Nome"
						error={errors.nomeResponsavel?.message}
					/>
					<Input
						type="text"
						name="cpfResponsavel"
						control={control}
						placeholder="CPF"
						error={errors.cpfResponsavel?.message}
					/>
				</Row>
				<Row>
					<Input
						type="email"
						name="email"
						control={control}
						placeholder="Email"
						error={errors.email?.message}
					/>
					<Input
						type="password"
						name="senha"
						control={control}
						placeholder="Senha"
						error={errors.senha?.message}
					/>
				</Row>

				<TitleContainer>
					<Title>Dados empresariais</Title>
				</TitleContainer>

				<Input
					type="text"
					name="razaoSocial"
					control={control}
					placeholder="Razão social"
					error={errors.razaoSocial?.message}
				/>
				<Input
					type="text"
					name="cnpj"
					control={control}
					placeholder="CNPJ"
					error={errors.cnpj?.message}
				/>
				<Input
					type="text"
					name="inscricaoEstadual"
					control={control}
					placeholder="Inscrição estadual"
					error={errors.inscricaoEstadual?.message}
				/>
				<Description>
					É importante que o usuário forneça informações precisas e
					atualizadas, para que possa ser contatado posteriormente
					caso necessário. Após o preenchimento do formulário, nossa
					equipe avaliará o status do contrato com a empresa e
					retornaremos, seja por meio de um e-mail ou de uma mensagem
					na própria plataforma. Em alguns casos, pode ser necessário
					aguardar a validação das informações pelo responsável pelo
					cadastro.
				</Description>
				<CheckBox />
				<ButtonsContainer>
					<Button type="submit" label="Enviar" loading={isLoading} />
				</ButtonsContainer>
			</Form>
		</Container>
	);
};
