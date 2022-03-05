import React from "react";
import { signInWithGoogle } from "../../../firebase";
import CustomButton from "../../CustomButton";
import FormInput from "../FormInput";
import "./index.scss";

function Signin({ handleChange, label, ...signinProps }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.value);
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
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

Signin.propTypes = {};

export default Signin;
