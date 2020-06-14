import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import makeStyle from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import * as api from "../api/login";
import { loginSuccess } from "../redux/reducers/Actions/loginAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyle((theme) => ({
  paper: {
    marginTop: "10em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texfield: {
    width: "40%",
    paddingBottom: "2em",
  },
}));

function Login(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [logginError, setError] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginHandler = () => {
    api
      .login(user, pass)
      .then((res) => {
        console.log(res);
        if (res.data.jwt) {
          localStorage.setItem(
            "info",
            JSON.stringify({ token: res.data.jwt, user })
          );
          dispatch(loginSuccess(user));
          props.history.push("/");
        } else {
          setError(true);
          console.log(res);
        }
      })
      .catch((e) => setError(true));
  };

  return (
    <div className={classes.paper + " animate__animated animate__fadeInLeft"}>
      <Typography variant="h4">LOGIN</Typography>
      {logginError && (
        <Alert
          style={{ width: "30%", margin: "2em auto 2em auto" }}
          severity="error"
        >
          Invalid User or pass
        </Alert>
      )}
      <TextField
        variant="outlined"
        className={classes.texfield}
        label="Username"
        onChange={(e) => setUser(e.target.value)}
      />
      <TextField
        className={classes.texfield}
        type="password"
        label="Password"
        onChange={(e) => setPass(e.target.value)}
        variant="outlined"
      />
      <Button
        onClick={loginHandler}
        style={{ width: "20%" }}
        variant="contained"
        color="primary"
      >
        Login
      </Button>
      <p style={{ marginTop: "3em" }}>
        Don't have an account yet ?{" "}
        <Link to="/signup" style={{ textDecoration: "none" }}>
          Signup
        </Link>
      </p>
    </div>
  );
}

export default Login;
