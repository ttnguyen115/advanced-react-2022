import React from "react";
import { auth, signInWithGoogle } from "../../firebase";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import "./index.scss";

function Signin(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmitForm}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="Email"
          handleChange={handleChangeEmail}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="Password"
          handleChange={handleChangePassword}
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

Signin.propTypes = {};

export default Signin;
