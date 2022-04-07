import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    localStorage.removeItem("auth");
  }

  return (
    <div className="navbar">
      <MyButton onClick={() => logout()}>Exit</MyButton>
      <div className="navbar__links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
