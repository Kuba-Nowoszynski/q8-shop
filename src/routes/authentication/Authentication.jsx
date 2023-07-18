// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebaseUtils";

import SignUpForm from "../../components/signUpForm/signUpForm";
import SignInForm from "../../components/signInForm/SignInForm";
import "./authentication.scss";

export default function Authentication() {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign in with Google</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
