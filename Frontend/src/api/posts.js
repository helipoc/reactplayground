import Axios from "axios";
import jwt from "./Auth";

export function getPosts() {
  return Axios.get("/post/myposts", {
    headers: { Authorization: `Bearer ${jwt()}` },
  }).then((res) => res.data);
}

export function deletePost(id) {
  return Axios.post(
    "/post/delete",
    { postId: id },
    { headers: { Authorization: `Bearer ${jwt()}` } }
  );
}

export function friendposts() {
  return Axios.get("/post/friendposts", {
    headers: { Authorization: `Bearer ${jwt()}` },
  }).then((rep) => rep.data);
}
