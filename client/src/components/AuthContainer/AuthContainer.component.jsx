import React, { useState } from "react";
import Login from "../Login/Login.component";
import Register from "../Register/Register.component";
import "./AuthContainer.styles.css";

const AuthContainer = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth-container">
      {showLogin ? (
        <Login handleChange={() => setShowLogin(false)} />
      ) : (
        <Register handleChange={() => setShowLogin(true)} />
      )}
    </div>
  );
};

export default AuthContainer;
