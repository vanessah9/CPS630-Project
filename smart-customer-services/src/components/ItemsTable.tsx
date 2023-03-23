import { useEffect, useState } from "react";
import { getInvoice, getInvoiceItems } from "../api/invoiceApi";

interface Item {
  id: string;
  name: string;
  price: number;
}

interface InputProps {
  items: Item[];
  isInvoice?: Boolean;
  shippingCost?: number;
  // change to not optional later
}

export default function ItemsTable({
  items,
  isInvoice,
  shippingCost = 0,
}: InputProps) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = items.reduce(
      (accumulator, currentItem) => accumulator + currentItem.price,
      0
    );
    setTotalPrice(total + shippingCost);
  }, [items, shippingCost]);

  const formattedPrice = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "CAD",
  });

  const rows = items.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{"$" + item.price}</td>
    </tr>
  ));

  rows.push(
    <tr>
      <th scope="row">Shipping</th>
      <td>{"$" + shippingCost}</td>
    </tr>
  );

  return (
    <div className="items table-responsive">
      <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
          {isInvoice && (
            <tr className="table-group-divider">
              <th scope="row">Subtotal</th>
              <td>{formattedPrice}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
