import {
	AiOutlineInfoCircle,
	AiOutlineEdit,
	AiOutlineEye,
} from 'react-icons/ai';
import { Loading } from '../../resources/Loading';
import { NotFound } from '../../resources/NotFound';
import {
	Container,
	Content,
	THeader,
	Tr,
	ThContent,
	InfoBalloon,
	InfoContainer,
	Th,
	TBody,
	Td,
	OptionButton,
} from './styles';
import { IClient } from '../../../interfaces/IClient';
import {
	formatDate,
	putCNPJMask,
	putCPFMask,
	putTokenMask,
	relativeDate,
} from '../../../utils';

interface ILAbelTable {
	objectKey: string;
	text: string;
	info?: string;
	mask?: 'cpf' | 'cnpj' | 'token' | 'date' | 'relativeDate';
}

interface ITableProps {
	onEdit?: (client: IClient) => any;
	labels: ILAbelTable[];
	data?: any[];
	loading?: boolean;
	onViewContent?: (key: string) => void;
}

export const Table = ({
	onEdit,
	labels,
	data,
	loading,
	onViewContent,
}: ITableProps): JSX.Element => {
	if (!loading && (!data || data?.length === 0 || typeof data == 'string'))
		return (
			<Container>
				<NotFound label="Nenhuma informação encontrada." />
			</Container>
		);
	return (
		<Container>
			<Content>
				<THeader>
					<Tr>
						{labels.map(label => (
							<Th key={label.objectKey}>
								{label.info ? (
									<ThContent>
										{label.text}
										<InfoContainer>
											<AiOutlineInfoCircle />
											<InfoBalloon>
												{label.info}
											</InfoBalloon>
										</InfoContainer>
									</ThContent>
								) : (
									label.text
								)}
							</Th>
						))}
						{onEdit && <Th></Th>}
					</Tr>
				</THeader>
				<TBody>
					{loading ? (
						<Tr>
							{labels.map(label => (
								<Td key={label.objectKey}>
									<Loading />
								</Td>
							))}
						</Tr>
					) : (
						data.map(item => {
							return (
								<Tr key={item.id}>
									{labels.map(label => {
										const value = item[label.objectKey];
										switch (label.mask) {
											case 'cpf':
												return (
													<Td key={label.objectKey}>
														{putCPFMask(value)}
													</Td>
												);
											case 'cnpj':
												return (
													<Td key={label.objectKey}>
														{putCNPJMask(value)}
													</Td>
												);
											case 'token':
												return (
													<Td key={label.objectKey}>
														{putTokenMask(value)}
													</Td>
												);
											case 'date':
												return (
													<Td key={label.objectKey}>
														{formatDate(value)}
													</Td>
												);
											case 'relativeDate':
												return (
													<Td key={label.objectKey}>
														{relativeDate(value)}
													</Td>
												);
											default:
												return (
													<Td key={label.objectKey}>
														{value}
													</Td>
												);
										}
									})}

									{onViewContent && (
										<Td>
											<OptionButton
												onClick={() =>
													onViewContent(item.chave)
												}>
												<AiOutlineEye size={18} />
											</OptionButton>
										</Td>
									)}
									{onEdit && (
										<Td>
											<OptionButton
												onClick={() => onEdit(item)}>
												<AiOutlineEdit size={18} />
											</OptionButton>
										</Td>
									)}
								</Tr>
							);
						})
					)}
				</TBody>
			</Content>
		</Container>
	);
};
