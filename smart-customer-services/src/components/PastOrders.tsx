import checkLogin from "@/auth/checkLogin";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PastOrders() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);
  return (
    <div className="pastOrders">
      <h1 className="pastOrders-title">Past Orders</h1>

    </div>
  );
}