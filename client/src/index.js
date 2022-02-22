import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/app.context";
import AuthWrapper from "./components/AuthWrapper/AuthWrapper.component";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
