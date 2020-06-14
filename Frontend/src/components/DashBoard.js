import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

function Myposts(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postState.FriendPosts);

  useEffect(() => {
    if (!posts) {
      dispatch({ type: "LOAD_FRIENDS_POSTS" });
    }
  }, [dispatch]);
  return (
    <Grid style={{ marginTop: "10%" }} container direction="row" spacing={4}>
      {posts &&
        posts.map((p) => {
          return p.posts.map((post) => {
            return (
              <Grid key={post._id} item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h3">{post.Title}</Typography>
                    <Typography variant="button">
                      Posted By {p.postedBy}
                    </Typography>
                    <Typography variant="h5">{post.Body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          });
        })}
    </Grid>
  );
}
export default Myposts;
