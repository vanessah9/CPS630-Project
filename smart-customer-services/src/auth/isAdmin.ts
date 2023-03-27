import axios from "axios";

export default function isAdmin(navigate: (path: string) => void) {
  axios
    .get("http://localhost:3000/checkadmin", {
      headers: { "x-access-token": localStorage.getItem("token") || "" },
    })
    .catch((err) => {
      navigate("/");
    });
}
