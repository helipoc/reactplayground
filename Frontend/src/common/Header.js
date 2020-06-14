import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Text from "@material-ui/core/Typography";
import { NavLink as Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import * as actions from "../redux/reducers/Actions/loginAction";

const activeLink = {
  color: "orange",
  borderBottom: "3px solid black",
};
const Header = (props) => {
  const user = useSelector((state) => state.userState.currentUser);
  const [LoggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();

  const logginoutHandler = () => {
    dispatch(actions.Logout());
    setLoggedOut(true);
  };
  return (
    <>
      {LoggedOut && <Redirect to="/" />}
      {user ? (
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Typography variant="button">Hi&nbsp;{user}</Typography>
            <Grid container justify="flex-end" spacing={4}>
              <Grid item>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                  activeStyle={activeLink}
                >
                  <Text variant="button">Friend's Posts</Text>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/myposts"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  activeStyle={activeLink}
                >
                  <Text variant="button">Myposts</Text>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/post"
                  style={{ textDecoration: "none", color: "white" }}
                  activeStyle={activeLink}
                >
                  <Text variant="button">Add Post</Text>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/users"
                  style={{ textDecoration: "none", color: "white" }}
                  activeStyle={activeLink}
                >
                  <Text variant="button">Show users</Text>
                </Link>
              </Grid>
              <Grid item>
                <a
                  onClick={logginoutHandler}
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Text variant="button">Logout</Text>
                </a>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Grid container justify="flex-end" spacing={4}>
              <Grid item>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                  activeStyle={activeLink}
                >
                  <Text variant="button">Login</Text>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/signup"
                  activeStyle={activeLink}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Text variant="button">Signup</Text>{" "}
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
export default Header;
