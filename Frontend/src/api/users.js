import jwt from "./Auth";
import Axios from "axios";

export function getUsers() {
  return Axios.get("/users", {
    headers: { Authorization: `Bearer ${jwt()}` },
  }).then((rep) => rep.data);
}

export function subscribe(id) {
  return Axios.post(
    "/user/newFriend",
    { friendId: id },
    { headers: { Authorization: `Bearer ${jwt()}` } }
  );
}
