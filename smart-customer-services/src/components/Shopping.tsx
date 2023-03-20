import { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import ShoppingCart from "@/assets/icons/shopping-cart.svg";

const data = [
  {
    id: "3",
    name: "Adidas Ultraboost",
    price: 120,
  },
  {
    id: "4",
    name: "Vans Old Skool",
    price: 60,
  },
  {
    id: "5",
    name: "Converse Chuck Taylor All Star",
    price: 55,
  },
  {
    id: "6",
    name: "Puma Suede Classic",
    price: 70,
  },
  {
    id: "7",
    name: "New Balance 990v5",
    price: 175,
  },
];

export default function Shopping() {
  const [dragging, setDragging] = useState(false);
  let items = JSON.parse(sessionStorage.getItem("items") || "[]");
  const [cartCount, setCartCount] = useState<number>(items.length);

  const landingProps = {
    id: "div1",
    onDrop: () => drop(event),
    onDragOver: () => allowDrop(event),
  };

  const dragProps = {
    draggable: true,
    onDragStart: () => {
      drag(event), setDragging(true);
    },
    onDragEnd: () => setDragging(false),
  };

  const allowDrop = (ev: any) => ev.preventDefault();
  const drag = (ev: any) => ev.dataTransfer.setData("text", ev.target.id);

  function drop(ev: any) {
    ev.preventDefault();
    updateSessionAndCartCount(ev);
    setDragging(false);
  }

  function updateSessionAndCartCount(ev: any) {
    let dataId = ev.dataTransfer.getData("text");
    let dataObject = data.filter((item: any) => item.id === dataId)[0];
    items.push(dataObject);
    let itemsJson = JSON.stringify(items);
    sessionStorage.setItem("items", itemsJson);
    setCartCount((prev) => prev + 1);
  }

  return (
    <div className="shopping">
      <div className="shopping-title">
        <h1>Shopping</h1>
      </div>
      <div
        {...landingProps}
        style={{
          width: dragging ? "200px" : "100px",
          height: dragging ? "200px" : "100px",
        }}
        className="shopping-cart"
      >
        <div className="shopping-cart__count">{cartCount}</div>
        <img
          src={ShoppingCart}
          className="shopping-cart__icon"
          style={{
            width: dragging ? "100px" : "50px",
            height: dragging ? "100px" : "50px",
          }}
        />
      </div>
      {data.map((item) => (
        <div {...dragProps} id={item.id}>
          <ShoppingItem {...item} />
        </div>
      ))}
    </div>
  );
}
