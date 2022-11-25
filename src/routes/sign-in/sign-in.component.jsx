import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up/sign-up.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      await createUserDocumentFromAuth(response.user);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
