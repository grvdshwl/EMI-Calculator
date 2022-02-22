import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import AuthContainer from "../AuthContainer/AuthContainer.component";

const AuthWrapper = ({ children }) => {
  const { user } = useContext(AppContext);

  if (!user) {
    return <AuthContainer />;
  }

  return <>{children}</>;
};

export default AuthWrapper;
