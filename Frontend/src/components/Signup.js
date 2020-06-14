import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import makeStyle from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import * as api from "../api/login";
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

function Signup(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirm] = useState("");
  const [registred, setRegisted] = useState(false);
  const [unmatchedPass, setPassError] = useState(false);
  const classes = useStyles();
  function signupHandler() {
    if (confirmpass === pass) {
      api.Signup(user, pass);
      setRegisted(true);
    } else {
      setPassError(true);
    }
  }

  return (
    <div className={classes.paper + " animate__animated animate__fadeInLeft"}>
      <Typography variant="h4">LOGIN</Typography>
      {registred && (
        <Alert
          style={{ width: "30%", margin: "2em auto 2em auto" }}
          severity="success"
        >
          You are registred now
        </Alert>
      )}
      {unmatchedPass && (
        <Alert
          style={{ width: "30%", margin: "2em auto 2em auto" }}
          severity="error"
        >
          Passwords don't matchs
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
      <TextField
        className={classes.texfield}
        type="password"
        label="Confirm password"
        onChange={(e) => setConfirm(e.target.value)}
        variant="outlined"
      />
      <Button
        onClick={signupHandler}
        style={{ width: "20%" }}
        variant="contained"
        color="primary"
      >
        Signup
      </Button>
      <p style={{ marginTop: "3em" }}>
        Already have an account ?{" "}
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
