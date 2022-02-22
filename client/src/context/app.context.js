import React, { createContext, useState } from "react";
import { monthName } from "./app.data";
import { LoginService, RegisterService, saveHistory } from "./app.services";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [registerError, setRegisterError] = useState(null);

  const resetData = () => {
    setData(null);
  };

  const handleData = (data) => {
    const { amount, interest, duration } = data;

    const interestAmount = (+amount * (1 + +interest / 100)) ^ (+duration / 12);
    const emi = (interestAmount / +duration).toFixed(2);
    const emiArray = new Array(+duration).fill({ emi });
    const modifiedArray = emiArray.map((item, index) => {
      let date = new Date();
      date.setMonth(date.getMonth() + 1 + index);

      const month = monthName[`${date.getMonth()}`];
      const year = date.getFullYear();

      return {
        ...item,
        serial: index + 1,
        date: `${month} ${year}`,
      };
    });

    const historyData = {
      data: [modifiedArray],
    };

    saveHistory(historyData, user.email);
    setData(modifiedArray);
  };

  const handleLogin = async (email, password) => {
    try {
      const data = await LoginService(email, password);
      setUser(data);
      setLoginError(null);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const handleRegister = async (data) => {
    try {
      const registerData = await RegisterService(data);
      setUser(registerData);
      setRegisterError(null);
    } catch (error) {
      setRegisterError(error.message);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoginError(null);
    setRegisterError(null);
  };

  const context = {
    data,
    handleData,
    user,
    loginError,
    registerError,
    handleLogin,
    handleRegister,
    handleLogout,
    resetData,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
