import {
  Container,
  BackgroundImage,
  Body,
  Title,
  Description,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <Container>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Body>
        <Title>{title}</Title>
        <Description>Shop Now</Description>
      </Body>
    </Container>
  );
};

export default DirectoryItem;
