import React, { useState, useCallback } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import axios from "axios";

function AddPost(props) {
  const [post, setPost] = useState({});

  const dispatch = useDispatch();
  const changeHandler = useCallback(
    (e) => {
      setPost({ ...post, [e.target.name]: e.target.value });
    },
    [post]
  );

  const sendPost = () => {
    const jwt = JSON.parse(localStorage.getItem("info")).token;
    axios
      .post(
        "/post/new",
        { post },
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .then(() => {
        dispatch({ type: "ADDED_POST" });
        props.history.push("/myposts");
      })
      .catch(() => console.log("Error"));
  };
  return (
    <>
      <Paper style={{ margin: "10% 10% auto 10%" }}>
        <Grid container direction="column" spacing={4}>
          <Grid item style={{ textAlign: "center" }}>
            <TextField
              name="Title"
              autoComplete="off"
              label="Title"
              variant="outlined"
              onChange={changeHandler}
            />
          </Grid>
          <Grid item>
            <TextField
              name="Body"
              id="standard-multiline-static"
              label="Post"
              multiline
              variant="filled"
              rows={12}
              onChange={changeHandler}
              fullWidth
            />
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Button color="primary" variant="contained" onClick={sendPost}>
              Add Post
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default AddPost;
