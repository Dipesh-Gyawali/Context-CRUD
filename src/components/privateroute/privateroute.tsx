import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Login } from "../../main";

export const PrivateRoute = () => {
  const { loginxa, logout, setLogin } = useContext(Login);

  console.log(loginxa, "authentication true or false");


  return loginxa ? <Outlet /> : <Navigate to="/login"></Navigate>;
};
