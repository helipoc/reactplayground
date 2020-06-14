import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function Myposts(props) {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.postState);

  const deleteHandler = (id) => {
    dispatch({ type: "DELETE_POST", id });
  };
  useEffect(() => {
    if (!postState.posts) {
      dispatch({ type: "LOAD_POSTS" });
    }
  }, [dispatch]);
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={postState.done}
        autoHideDuration={2000}
        onClose={() => dispatch({ type: "UNADD_POST" })}
      >
        <Alert severity="success">Post Created !</Alert>
      </Snackbar>
      <Grid style={{ marginTop: "10%" }} container direction="row" spacing={4}>
        {postState.posts &&
          postState.posts.map((post) => {
            return (
              <Grid key={post._id} item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h3">{post.Title}</Typography>
                    <Typography variant="h5">{post.Body}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteHandler(post._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default Myposts;
