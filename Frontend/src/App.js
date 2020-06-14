import React from "react";
import Header from "./common/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/DashBoard";
import Myposts from "./components/Myposts";
import DisplayUsers from "./components/DisplayUsers";
import PrivateRoute from "./common/privateRoute";
import RestrictedRoute from "./common/RestrictedRoute";
import { Switch, Route } from "react-router-dom";
import AddPost from "./components/AddPost";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <PrivateRoute exact path="/home" Component={Dashboard} />
        <RestrictedRoute exact path="/signup" Component={Signup} />
        <RestrictedRoute exact path="/login" Component={Login} />
        <PrivateRoute exact path="/post" Component={AddPost} />
        <PrivateRoute exact path="/myposts" Component={Myposts} />
        <PrivateRoute exact path="/users" Component={DisplayUsers} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </>
  );
}

export default App;
