import React from "react";
import Signin from "../../components/AuthForm/Signin";
import Signup from "../../components/AuthForm/Signup";
import './index.scss';

function AuthPage(props) {
  return (
    <div className="auth-page">
      <Signin />
      <Signup />
    </div>
  );
}

AuthPage.propTypes = {};

export default AuthPage;
