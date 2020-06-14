import React from "react";
import { Route, Redirect } from "react-router-dom";

function RestrictedRoute({ Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !localStorage.getItem("info") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        );
      }}
    />
  );
}

export default RestrictedRoute;
