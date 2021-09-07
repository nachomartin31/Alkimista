import cookies from "js-cookie";

export function setUserLogged(userLogged: object) {
  const user = cookies.set("userLogged", userLogged);
  return JSON.stringify(user);
}
export function getUserLogged() {
  const user: any = cookies.get("userLogged");
  return JSON.parse(user);
}
