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
      <div>
        <details>
          <summary>Order #1023</summary>
          <div>
            <div>Order Date: 2021-05-01</div>
            <div>Order Total: $100.00</div>
            <div>Order Status: Delivered</div>
            <div>Order Items:</div>
            <div>1 x Apple</div>
            <div>1 x Banana</div>
            <div>1 x Orange</div>
          </div>
        </details>
        
      </div>

    </div>
  );
}