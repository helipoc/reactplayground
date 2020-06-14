import React from "react";
import { Route, Redirect } from "react-router-dom";

function privateRoute({ Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return localStorage.getItem("info") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default privateRoute;
