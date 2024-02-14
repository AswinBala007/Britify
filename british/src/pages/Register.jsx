import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/new.css";
import { signUp } from "../services/auth";
const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  // const roleRef = useRef("");
  const passwordRef = useRef("");
  const mobileRef = useRef("");
  const [errors, setErrors] = useState({});

  const handleFormSubmit = async (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const mobile = mobileRef.current.value;
    const [role, setRole] = useState("");
    e.preventdefault();
    let formErrors = {};
    if (!name) {
      formErrors.name = "Name is required";
    }

    if (!validEmail(email)) {
      formErrors.email = "Invalid email";
    }

    if (!role) {
      formErrors.role = "Role is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // no errors
      const formData = new FormData(e.target);
      submitForm(formData, name, email, role);
    } else {
      // don't submit form if errors
    }
    const validEmail = (email) => {
      const regex = /\S+@\S+\.\S+/;
      return regex.test(email);
    };
    const form = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    };
    signUp(form);
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    mobileRef.current.value = "";

    try {
      if (email.trim() === "" || password.trim() === "") {
        setErrorMessage("Please provide both email and password.");
        return;
      }

      // Simulate login request to backend
      const response = await fetch("http://localhost:8181/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      const token = data.token;

      console.log("Login successful");
      console.log("Token:", token);
      sessionStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
    }
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
          <h1 className="title">Sign Up</h1>
          <div className="group">
            <input
              type="text"
              required
              className="group_input"
              name="name"
              placeholder="Name"
              ref={nameRef}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="group">
            <input
              type="email"
              required
              className="group_input"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="group">
            <select
              className="group_input"
              name="userrole"
              required
              placeholder="Select Role"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="select">--Select--</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p>{errors.role}</p>}
          </div>
          <div className="group">
            <input
              type="text"
              required
              className="group_input"
              name="mobile"
              placeholder="Mobile Number"
              ref={mobileRef}
            />
          </div>
          <div className="group">
            <input
              type="password"
              required
              className="group_input"
              name="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <button className="sign_up" onClick={handleFormSubmit}>
            <Link to="/home">Sign Up</Link>
          </button>
          <div className="form_text">
            <p>
              Existing Certify.brit User?{" "}
              <Link to="/login" className="next_auth">
                Sign in here
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

export default Register;
