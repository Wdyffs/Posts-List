import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context/context";

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  function login(e) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  }
  return (
    <div>
      <h1>Page for login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Type a login" />
        <MyInput type="password" placeholder="Type a password" />
        <MyButton>Log in</MyButton>
      </form>
    </div>
  );
};

export default Login;
