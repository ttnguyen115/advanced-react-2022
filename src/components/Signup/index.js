import React from "react";
import { auth, createUserProfileDocument } from "../../firebase";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import "./index.scss";

function Signup(props) {
  const initUser = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = React.useState(initUser);
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      setUser(initUser);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeDisplayName = (e) => setDisplayName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChangeDisplayName}
          required
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChangeEmail}
          required
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChangePassword}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          handleChange={handleChangeConfirmPassword}
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

Signup.propTypes = {};

export default Signup;
