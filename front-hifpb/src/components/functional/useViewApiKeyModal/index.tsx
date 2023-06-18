import { useRef, useState } from 'react';
import { RiFileCopyLine } from 'react-icons/ri';
import { H2 } from '../../texts/H2';
import { Paragraph } from '../../texts/Paragraph';
import {
	Container,
	Content,
	ApiKeyText,
	KeyContainer,
	CopyButton,
} from './styles';
import { toast } from 'react-toastify';

export const useViewApiKeyModal = () => {
	const keyRef = useRef<HTMLHeadingElement>(null);

	const [key, setKey] = useState('');

	const openKeyModal = (key: string) => {
		setKey(key);
	};

	const handleClose = () => {
		setKey('');
	};

	const handleClick = () => {
		if (keyRef.current) {
			const texto = keyRef.current.textContent;
			if (texto) {
				navigator.clipboard
					.writeText(texto)
					.then(() => {
						toast.success(
							'Texto copiado para área de transferência',
						);
					})
					.catch(() => {
						toast.success(
							'Erro ao copiar texto para área de transferência',
						);
					});
			}
		}
	};

	const ViewApiKeyModal = () => {
		if (!key) return <></>;
		return (
			<Container onClick={handleClose}>
				<Content onClick={e => e.stopPropagation()}>
					<H2>Chave de API</H2>
					<Paragraph>
						Copie sua chave de API abaixo e utilize nas requisições.
					</Paragraph>
					<KeyContainer>
						<ApiKeyText ref={keyRef}>{key}</ApiKeyText>
						<CopyButton onClick={handleClick}>
							<RiFileCopyLine size={30} />
						</CopyButton>
					</KeyContainer>
				</Content>
			</Container>
		);
	};

	return {
		openKeyModal,
		ViewApiKeyModal,
	};
};
