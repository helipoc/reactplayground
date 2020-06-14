export default function getJwt() {
  return JSON.parse(localStorage.getItem("info")).token;
}
