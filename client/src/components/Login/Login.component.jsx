import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import TextInput from "../TextInput/TextInput.component";
import "./Login.styles.css";

const Login = ({ handleChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, loginError: error } = useContext(AppContext);

  let isDisabled = !email || !password ? true : false;

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2> Login</h2>
      {!!error && <h5 className="error-message">{error}</h5>}
      <TextInput
        label="Email"
        type="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
        required={true}
      />
      <TextInput
        label="Password"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        required={true}
      />

      <div className="btn-wrapper">
        <button
          type="submit"
          className={`form-btn ${isDisabled ? "disabled" : ""}`}
          disabled={isDisabled}
        >
          Login
        </button>
        <button type="button" className={`form-btn `} onClick={handleChange}>
          Register{" "}
        </button>
      </div>
    </form>
  );
};

export default Login;
