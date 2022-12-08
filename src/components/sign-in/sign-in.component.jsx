import Input from "../input/input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useState } from "react";
import { Container, ButtonGroup } from "./sign-in.styles";
import { useDispatch } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [login, setLogin] = useState(defaultValues);
  const { email, password } = login;
  const dispatch = useDispatch();

  const resetForm = () => {
    setLogin(defaultValues);
  };

  const changeHandler = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetForm();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    dispatch(googleSignInStart());
  };

  return (
    <Container>
      <h2>Already have an account ?</h2>
      <span>Sign in with email and password</span>
      <form>
        <Input
          label="Email"
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />
        <Input
          label="Password"
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />
        <ButtonGroup>
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Button
            type="button"
            variant={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default SignIn;
