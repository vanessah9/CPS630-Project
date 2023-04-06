import checkLogin from "@/auth/checkLogin";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getOrders } from "@/api/orderApi";

export default function PastOrders() {
  const navigate = useNavigate();
  const location = useLocation();
  const [orders, setOrders] = useState<Array<any>>([]);

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await getOrders();
    setOrders(res.data);
  };

  return (
    <div className="pastOrders">
      <h1 className="pastOrders-title">Past Orders</h1>
      <div>
        {orders.map((order: any) => {
          if (!order.invoice) return <></>;
          const dateObject = new Date(order.dateIssued);
          const humanDateFormat = dateObject.toLocaleString();
          const orderData = order.invoice?.items;
          return (
            <>
              <details>
                <summary>Order placed on {humanDateFormat}</summary>
                <div>
                  {orderData.map((item: any) => {
                    return (
                      <div>
                        <div>Name: {item.item?.name}</div>
                        <div>Price: ${item.item?.price}</div>
                        <div>Quantity: {item.quantity}</div>
                        <br />
                      </div>
                    );
                  })}
                </div>
              </details>
            </>
          );
        })}
      </div>
    </div>
  );
}
