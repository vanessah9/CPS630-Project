import checkLogin from "@/auth/checkLogin";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function OrderConfirmations() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  return (
    <div>
      <h1>Thank you for ordering!</h1>
      <p> View your past orders here</p>
      <Link to="/past-orders">
        <button className="btn btn-primary">View Past Orders</button>
      </Link>
    </div>
  );
}
