import Input from "../input/input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useState } from "react";
import { UserContext } from "../../context/user.context";
import "./sign-in.styles.scss";

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
        console.log(response);
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
    <div className="sign-in-container">
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
        <div className="buttons-container">
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
        </div>
      </form>
    </div>
  );
};

export default SignIn;
