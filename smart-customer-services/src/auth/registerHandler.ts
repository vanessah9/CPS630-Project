import axios from "axios";

interface registerHandlerProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  password: string;
  confirmPassword: string;
}

export default function registerHandler({
  firstName,
  lastName,
  email,
  phoneNo,
  address,
  city,
  province,
  postalCode,
  country,
  password,
  confirmPassword,
}: registerHandlerProps) {
  return new Promise<{ message: string }>((resolve, reject) => {
    if (password !== confirmPassword) {
      reject({ message: "Passwords do not match" });
    } else {
      axios
        .post("http://localhost:3000/register", {
          firstName,
          lastName,
          email,
          phoneNo,
          address,
          city,
          province,
          postalCode,
          country,
          password,
        })
        .then((res) => {
          axios
            .post("http://localhost:3000/login", { email, password })
            .then((res) => {
              console.log(res)
              localStorage.setItem("token", res.data.token);
              resolve({ message: "Successfully registed." });
            })
            .catch((err) => {
              reject({ message: err.response.data.error });
            });
        })
        .catch((err) => {
          console.log(err);
          reject({ message: err.response.data.error });
        });
    }
  });
}
