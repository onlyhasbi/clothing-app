import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import { Container } from "./authentication.styles";

const Authentication = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default Authentication;
