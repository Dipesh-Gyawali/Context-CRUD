import { useContext } from "react";
import "./_login.scss";
import { Login } from "../main";
import { useNavigate } from "react-router-dom";

export const Loginn = () => {
  const { loginxa, logout, setLogin } = useContext(Login);

  console.log(loginxa, "loginxa");
  console.log(logout, "logout");

  const navigate = useNavigate();

  const handleLogin = () => {
    setLogin({
      loginxa: true,
      logout: false
    })

    navigate("/");
  };

  return (
    <>
      <div className="login-container">
        <div className="text-password-container">
          <input type="email" placeholder=" Enter your email" />
          <input type="password" placeholder=" Enter your password" />
          <button onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </>
  );
};
