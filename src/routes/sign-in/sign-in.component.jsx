import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const getResult = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      await createUserDocumentFromAuth(response.user);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      await createUserDocumentFromAuth(response.user);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
