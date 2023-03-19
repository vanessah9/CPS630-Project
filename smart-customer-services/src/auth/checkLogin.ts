import axios from "axios";

export default function isLoggedIn(
  navigate: (path: string) => void,
  currentPath: string
) {
  axios
    .get("http://localhost:3000/checklogin", {
      headers: { "x-access-token": localStorage.getItem("token") || "" },
    })
    // .then((res) => {
    //   if (res.data.message === "success" && currentPath !== "/dashboard") {
    //     navigate("/");
    //   }
    // })
    .catch((err) => {
      localStorage.removeItem("token");
      if (currentPath !== "/login" && currentPath !== "/signup") {
        navigate("/login");
      }
    });
}