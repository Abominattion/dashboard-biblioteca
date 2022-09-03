const tokenStorageName = "token";
import jwt_decode from "jwt-decode";

export function getToken() {
  return localStorage.getItem(tokenStorageName);
}

export function userIsLogged() {
  const token = localStorage.getItem(tokenStorageName);

  if (token == null) {
    return false;
  }
  let decoded = jwt_decode(token);
  return decoded != null ? true : false;
}