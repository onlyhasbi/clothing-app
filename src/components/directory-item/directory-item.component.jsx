import {
  Container,
  BackgroundImage,
  Body,
  Title,
  Description,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl, route } = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);

  return (
    <Container onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <Title>{title}</Title>
        <Description>Shop Now</Description>
      </Body>
    </Container>
  );
};

export default DirectoryItem;
