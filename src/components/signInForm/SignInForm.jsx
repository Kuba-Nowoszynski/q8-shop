import { useState, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebaseUtils";

import FormInput from "../formInput/FormInput";
import Button from "../button/Button";

import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/wrong-password") alert("Incorrect password");
      else if (err.code === "auth/user-not-found")
        alert("Account with that email does not exist");
      else console.log(err);
    }
  };

  useEffect(() => {
    const _getRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    };
    _getRedirectResult();
  }, []);

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          id="signEmail"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          id="signPassword"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            onClick={signInWithGoogleRedirect}
            type="button"
            buttonType="google"
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
