import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { Container } from "./sign-up.styles";

const defaultValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [fields, setFields] = useState(defaultValues);
  const { displayName, email, password, confirmPassword } = fields;
  const navigate = useNavigate();

  const resetForm = () => {
    setFields(defaultValues);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fields.password !== fields.confirmPassword) {
      alert("password and confirm password doesn't match");
      return;
    }

    await createAuthUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await createUserDocumentFromAuth({ ...user, displayName }).then(() => {
          resetForm();
          navigate("/");
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("Cannot create user, email already in use");
        } else {
          alert("error creating user ", error.message);
        }
      });
  };

  return (
    <Container>
      <h2>Don't have an account ?</h2>
      <span>Sign Up to create new account</span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

        <Input
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </Container>
  );
};

export default SignUp;
