import checkLogin from "@/auth/checkLogin";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import { Link } from "react-router-dom";

const data = [
  {
    id: "1",
    name: "Nike Air Max",
    price: 40,
  },
  {
    id: "2",
    name: "Nike Panda Dunk",
    price: 50,
  },
];
export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);
  let items = JSON.parse(sessionStorage.getItem("items") || "[]");

  return (
    <div>
      <h1>Cart</h1>
      <ItemsTable items={items} />
      <Link style={{ textDecoration: 'none' }} to={items.length > 0 ? "/checkout" : ""}>
        <button
          type="button"
          className={items.length > 0 ? "checkout-btn btn btn-outline-primary btn-lg" : "checkout-btn btn btn-outline-secondary btn-lg" }
          disabled={items.length <= 0}
        >
          Checkout
        </button>
      </Link>
    </div>
  );
}
