import React, { useState } from "react";
import TextInput from "../TextInput/TextInput.component";
import "./Form.styles.css";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
const Form = ({ showHistory }) => {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [duration, setDuration] = useState("");
  const { handleData } = useContext(AppContext);

  let isDisabled = !interest || !duration || !amount ? true : false;

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      amount,
      interest,
      duration,
    };

    handleData(data);
    setAmount("");
    setDuration("");
    setInterest("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextInput
        label="Amount (₹)"
        type="number"
        onChange={(event) => {
          setAmount(event.target.value);
        }}
        value={amount}
        required={true}
      />
      <TextInput
        label="Interest (%)"
        type="number"
        onChange={(event) => {
          setInterest(event.target.value);
        }}
        value={interest}
        required={true}
      />
      <TextInput
        label="Duration (Months)"
        type="number"
        onChange={(event) => {
          setDuration(event.target.value);
        }}
        value={duration}
        required={true}
      />
      <div className="btn-wrapper">
        <button
          type="submit"
          className={`form-btn ${isDisabled ? "disabled" : ""}`}
          disabled={isDisabled}
        >
          Submit
        </button>
        <button
          className="form-btn"
          type="button"
          onClick={() => {
            showHistory();
          }}
        >
          Check History
        </button>
      </div>
    </form>
  );
};

export default Form;
