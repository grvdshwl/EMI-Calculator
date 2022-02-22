import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import TextInput from "../TextInput/TextInput.component";
import "./Register.styles.css";

const Register = ({ handleChange }) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const { registerError: error, handleRegister } = useContext(AppContext);

  let isDisabled =
    !email || !password || !firstname || !lastname ? true : false;

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstname,
      lastname,
      email,
      password,
    };

    handleRegister(data);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2> Register</h2>
      {!!error && <h5 className="error-message">{error}</h5>}

      <TextInput
        label="First Name"
        type="text"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
        value={firstname}
        required={true}
      />
      <TextInput
        label="Last Name"
        type="text"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        value={lastname}
        required={true}
      />
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
          Register
        </button>
        <button type="button" className={`form-btn `} onClick={handleChange}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Register;
