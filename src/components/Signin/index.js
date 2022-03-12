import React from "react";
import { useDispatch } from "react-redux";
import {
  emailSignInRequest,
  googleSignInRequest,
} from "../../store/actions/userAction/actions";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import "./index.scss";

function Signin(props) {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = React.useState({ email: "", password: "" });

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({...userCredentials, [name]: value });
  }

  const handleClickSignInWithGoogle = () => dispatch(googleSignInRequest());
  
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    dispatch(emailSignInRequest(userCredentials));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmitForm}>
        <FormInput
          name="email"
          type="email"
          value={userCredentials.email}
          required
          label="Email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          required
          label="Password"
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={handleClickSignInWithGoogle}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

Signin.propTypes = {};

export default Signin;
