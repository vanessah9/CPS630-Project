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
      <Link to="/checkout">
        <button
          type="button"
          className="checkout-btn btn btn-outline-primary btn-lg"
        >
          Checkout
        </button>
      </Link>
    </div>
  );
}