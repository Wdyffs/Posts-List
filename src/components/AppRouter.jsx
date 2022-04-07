import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router/router";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route path={route.path} element={<route.element />} />
          ))
        : publicRoutes.map((route) => (
            <Route path={route.path} element={<route.element />} />
          ))}
    </Routes>
  );
};

export default AppRouter;
