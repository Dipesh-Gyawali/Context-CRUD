import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes.tsx";

export const Authentication = createContext<{
  users: any;
  loading: boolean;
  error: boolean;
  setAuthState: React.Dispatch<
    React.SetStateAction<{
      users: never[];
      loading: boolean;
      error: boolean;
    }>
  >;
} | null>(null);

export const Login = createContext<{
  loginxa: boolean,
  logout: boolean,
  setLogin: React.Dispatch<React.SetStateAction<{
    loginxa: boolean;
    logout: boolean;
}>>
} | null>(null);


const Root = () => {
  //  set the initial authentication state here
  const [authState, setAuthState] = useState({
    users: [],
    loading: false,
    error: false,
  });

  //  set the initial login state here
  const [login, setLogin] = useState({
    loginxa: false,
    logout: true,
  });




  return (
    <BrowserRouter>
      {/* <Authentication.Provider value={authState}>  or yesle:- authState: {users, loadding, error} dinxa */}

      {/* yesle {users, loading, error} dinxa */}
      <Login.Provider value={{ ...login, setLogin }}>
        <Authentication.Provider value={{ ...authState, setAuthState }}>
          <App />
          <Routes />
        </Authentication.Provider>
      </Login.Provider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
