import axios from "axios";

interface loginHandlerProps {
  email: string;
  password: string;
}

export default function loginHandler({ email, password }: loginHandlerProps) {
  return new Promise<{ message: string }>((resolve, reject) => {
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        resolve({ message: "Successfully logged in. Welcome back!" });
      })
      .catch((err) => {
        reject(err);
      });
  });
}
