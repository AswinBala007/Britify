// import React, { useState } from 'react';
// import '../assets/css/login.css'; // Import CSS file
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = () => {
//     if (username.trim() === '' || password.trim() === '') {
//       setErrorMessage('Please provide both username and password.');
//       return;
//     }
//     // You can add your login logic here
//     console.log('Logging in with:', username, password);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login to Certify.brit</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <button onClick={handleLogin}>Login</button>
//         <Link to="/signup" className="signup-link">Dont have an account? Sign up here</Link>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/new.css";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleFormSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const form = {
      email: email,
      password: password,
    };
    signIn(form)
      .then((res) => sessionStorage.setItem("token", res.data.token))
      .catch((err) => console.log(err));
    navigate("/home");
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div
      style={{
        height: "100lvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #abe9cd, #3eadcf)",
      }}
    >
      <div className="container">
        <div className="form">
          <h1 className="title">Sign In</h1>
          <div className="group">
            <input
              type="email"
              required
              className="group_input"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className="group">
            <input
              type="password"
              required
              className="group_input"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <button className="sign_in" onClick={handleFormSubmit}>
            Sign In
          </button>
          <div className="cta">
            <Link to="/remember_me" className="cta_text">
              Remember me
            </Link>
            <Link to="/help" className="cta_text cta_text_need_help">
              Need help?
            </Link>
          </div>
          <div className="form_text">
            <p>
              New to Caladium?{" "}
              <Link to="/register" className="next_auth">
                Sign up now
              </Link>
              .
            </p>
          </div>
          <div className="form_text_secondary">
            <p>
              <br />
              This page is protected by Google reCAPTCHA to
              <br />
              ensure you&apos;re not a bot.{" "}
              <Link to="/learn_more" className="learn_more">
                Learn more
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
