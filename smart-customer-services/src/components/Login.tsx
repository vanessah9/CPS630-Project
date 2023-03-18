import checkLogin from "@/auth/checkLogin";
import loginHandler from "@/auth/loginHandler";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e: any) {
    e.preventDefault();
    loginHandler(formData)
      .then((res) => {
        alert(res.message);
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  return (
    <div className="login">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <div className="mb-3">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
            />
            <label htmlFor="email">Email Address</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg login-btn"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}
