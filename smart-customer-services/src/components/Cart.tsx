import checkLogin from "@/auth/checkLogin";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import { Link } from "react-router-dom";
import { getItems } from "@/api/itemsApi";
import { SessionItem } from "@/models/Shopping";

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const [allItems, setAllItems] = useState<any>([]);
  const [cartItems, setCartItems] = useState<any>([]);

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  const checkoutPage = () => {
    if (cartItems.length > 0) {
      navigate("/checkout", { state: { cartItems } });
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const itemData = await getItems();
    setAllItems(itemData.data);
  };

  useEffect(() => {
    let computedItems: any = [];
    let sessionItems: SessionItem[] = JSON.parse(
      sessionStorage.getItem("items") || "[]"
    );

    if (allItems.length > 0) {
      sessionItems.forEach(({ id, quantity }) => {
        const item = allItems.find((item: any) => item._id === id);
        console.log(item);
        for (let i = 0; i < quantity; i++) {
          computedItems.push(item);
        }
      });
    }

    setCartItems(computedItems);
  }, [allItems]);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <ItemsTable items={cartItems} />
          <a style={{ textDecoration: "none" }}>
            <button
              type="button"
              className={
                cartItems.length > 0
                  ? "checkout-btn btn btn-outline-primary btn-lg"
                  : "checkout-btn btn btn-outline-secondary btn-lg"
              }
              onClick={checkoutPage}
              disabled={cartItems.length <= 0}
            >
              Checkout
            </button>
          </a>
        </>
      ) : (
        <div>Please add items to your cart</div>
      )}
    </div>
  );
}
