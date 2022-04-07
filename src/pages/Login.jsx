import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
  return (
    <div>
      <h1>Page for login</h1>
      <form>
        <MyInput type="text" placeholder="Type a login" />
        <MyInput type="password" placeholder="Type a password" />
        <MyButton>Log in</MyButton>
      </form>
    </div>
  );
};

export default Login;
