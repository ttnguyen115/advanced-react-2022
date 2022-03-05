// import React from "react";

// function AuthForm(props) {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const handleChangeEmail = (value) => setEmail(value);
//   const handleChangePassword = (value) => setPassword(value);
//   const handleSubmitForm = (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//   };

//   return (
//     <div className="sign-in">
//       <h2>I already have an account</h2>
//       <span>Sign in with your email and password</span>
//       <form onSubmit={handleSubmitForm}>
//         <input
//           name="email"
//           type="email"
//           value={email}
//           required
//           onChange={handleChangeEmail}
//         />
//         <label>Email</label>
//         <input
//           name="password"
//           type="password"
//           value={password}
//           required
//           onChange={handleChangePassword}
//         />
//         <label>Password</label>

//         <input type="submit" value="Sign In" />
//       </form>
//     </div>
//   );
// }

// AuthForm.propTypes = {};

// export default AuthForm;
