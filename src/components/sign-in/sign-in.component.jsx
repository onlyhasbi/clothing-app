import Input from "../input/input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useState } from "react";
import { Container,ButtonGroup } from "./sign-in.styles";

import {
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [login, setLogin] = useState(defaultValues);
  const { email, password } = login;

  const resetForm = () => {
    setLogin(defaultValues);
  };

  const changeHandler = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  const signIn = async (event) => {
    event.preventDefault();
    await signInAuthWithEmailAndPassword(email, password)
      .then((response) => {
        if (response) resetForm();
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found": {
            alert("incorrect email and password");
            break;
          }
          case "auth/email-already-in-use": {
            alert("Cannot create user, email already in use");
            break;
          }
          case "auth/wrong-password": {
            alert("incorrect email and password");
            break;
          }
          default:
            console.log(error.code);
        }
      });
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    await signInWithGooglePopup();
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
          <Button type="submit" onClick={signIn}>
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
