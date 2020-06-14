import Axios from "axios";

export function login(user, pass) {
  return Axios.post("/login", {
    username: user,
    password: pass,
  });
}

export function Signup(user, pass) {
  Axios.post("user/new", {
    username: user,
    password: pass,
  });
}

export function Logout() {
  const jwt = JSON.parse(localStorage.getItem("info")).token;
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  Axios.post("logout", null, config);
  localStorage.clear();
}
