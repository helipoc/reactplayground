import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

function DisplayUsers() {
  const users = useSelector((state) => state.userState.users) || [];
  const dispatch = useDispatch();
  const subscribeHandler = (id) => {
    debugger;
    dispatch({ type: "ADD_FRIEND", id });
  };
  useEffect(() => {
    if (users.length === 0) {
      dispatch({ type: "LOAD_USERS" });
    }
  }, [users]);
  return (
    <Grid style={{ marginTop: "5em" }} container direction="column" spacing={4}>
      {users.map((u) => {
        return (
          <Grid item key={u.id}>
            <Card raised>
              <CardContent>
                <Typography variant="subtitle1">
                  Username : {u.username}
                </Typography>
                <Typography variant="button">Posts : {u.postCount}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    subscribeHandler(u.id);
                  }}
                >
                  Subscribe
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default DisplayUsers;
