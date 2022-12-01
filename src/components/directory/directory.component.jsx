import DirectoryItem from "../directory-item/directory-item.component";
import { categories } from "../../model/categories.model";
import { Container } from "./directory.styles";

const Directory = () => {
  return (
    <Container>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default Directory;
