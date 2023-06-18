import {
	Container,
	ImageContainer,
	ServiceImage,
	Title,
	Description,
	Shadow,
} from './styles';

interface IServiceCardProps {
	img: string;
	title: string;
	description: string;
}

export const ServiceCard = ({ img, title, description }: IServiceCardProps) => {
	return (
		<Container>
			<ImageContainer>
				<ServiceImage alt={title} src={img} />
			</ImageContainer>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<Shadow />
		</Container>
	);
};
