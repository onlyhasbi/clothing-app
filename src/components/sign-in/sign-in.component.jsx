import Input from "../input/input.component";
import Button from "../button/button.component";
import { useState } from "react";
import "./sign-in.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
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
    setFields(defaultValues);
  };

  const changeHandler = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  const signIn = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      if (response.user) {
        console.log(response.user);
        alert("Login successed ", response.user.displayName);
        resetForm();
      }
    } catch (error) {
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
    }
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    const response = await signInWithGooglePopup();
    if (response) {
      await createUserDocumentFromAuth(response.user);
    }
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
          <Button type="button" variant="google" onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
