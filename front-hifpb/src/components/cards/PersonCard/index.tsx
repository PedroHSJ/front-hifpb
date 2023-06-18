import { Container, ImageContainer, Image, Name, Office } from './styles';

interface IPersonCardProps {
	image: string;
	name: string;
	office: string;
	url?: string;
}

export const PersonCard = ({ image, name, office, url }: IPersonCardProps) => {
	return (
		<Container href={url} target="_blank">
			<ImageContainer>
				<Image src={image} />
			</ImageContainer>
			<Name>{name}</Name>
			<Office>{office}</Office>
		</Container>
	);
};
