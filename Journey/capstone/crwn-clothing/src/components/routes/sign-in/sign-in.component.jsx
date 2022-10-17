import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase.utils";

import SignUp from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In PAGE</h1>
      <button onClick={logGoogleUser}>Sign in wih Google Popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
