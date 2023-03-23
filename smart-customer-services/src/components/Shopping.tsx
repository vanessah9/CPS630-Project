import { useState, useEffect } from "react";
import ShoppingItem from "./ShoppingItem";
import ShoppingCart from "@/assets/icons/shopping-cart.svg";
import { getItems } from "@/api/itemsApi";

interface SessionItem {
  id: string;
  quantity: number;
}

export default function Shopping() {
  let sessionArray = JSON.parse(sessionStorage.getItem("items") || "[]");

  const [dragging, setDragging] = useState(false);  
  const [cartCount, setCartCount] = useState<number>(sessionArray.length);
  const [items, setItems] = useState<any>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const itemData = await getItems();
    setItems(itemData.data);
  };

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
    try {
      let dataId = ev.dataTransfer.getData("text");
      let itemsJson = JSON.stringify(updateItems(dataId, sessionArray));
      sessionStorage.setItem("items", itemsJson);
      setCartCount((prev) => prev + 1);
    } catch (e: any) {
      setError(e);
    }
  }

  // this mimics the behavior of inserting an item into a dictionary,
  // but I kept it as an array for simplicity (i dont want igor to hate me)
  function updateItems(id: string, items: SessionItem[]) {
    let found = false;

    const newArr = items.map((item: SessionItem) => {
      if (item.id === id) {
        found = true;
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    if (!found) {
      newArr.push({ id: id, quantity: 1 });
    } 
    return newArr;
  }

  return (
    <div className="shopping">
      {error ? (
        <div className="alert alert-danger" role="alert">
          Error occured: {error}
        </div>
      ) : (
        <>
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
          <div className="shopping-grid">
            {items.map((item: any) => {
              return (
                item && (
                  <div
                    {...dragProps}
                    id={item._id}
                    className="shopping-grid__item"
                  >
                    <ShoppingItem
                      id={item._id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                    />
                  </div>
                )
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
