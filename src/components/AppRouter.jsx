import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/context";
import { privateRoutes, publicRoutes } from "../router/router";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = React.useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
    </Routes>
  );
};

export default AppRouter;
