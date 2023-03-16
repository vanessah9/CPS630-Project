import { useNavigate } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import { ChangeEvent, useState } from "react";

interface InputProps {
  name?: String;
}

export default function Checkout(props: InputProps) {
  const navigate = useNavigate();
  const invoicePage = () => {
    navigate("/invoice", { state: { shippingCost: { shippingCost } } });
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [estimateDelivery, setEstimateDelivery] = useState<Date | null>(null);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedOption(selected);

    let daysToAdd = 0;
    let hoursToAdd = 0;
    let shipping = 0;

    switch (selected) {
      case "toronto":
        daysToAdd = 1;
        hoursToAdd = 5;
        shipping = 10;
        break;
      case "brampton":
        daysToAdd = 3;
        hoursToAdd = 10;
        shipping = 12;
        break;
      case "markham":
        daysToAdd = 5;
        hoursToAdd = 5;
        shipping = 15;
        break;
      default:
        daysToAdd = 0;
        hoursToAdd = 0;
        shipping = 0;
    }

    const currentDate = new Date();
    const deliveryDate = new Date(
      currentDate.getTime() +
        daysToAdd * 24 * 60 * 60 * 1000 +
        hoursToAdd * 60 * 60 * 1000
    );

    setEstimateDelivery(deliveryDate);
    setShippingCost(shipping);
  };

  return (
    <div className="checkout">
      <h1 className="checkout-title">Checkout</h1>
      <p className="checkout-text">Review Cart Items</p>
      <ItemsTable shippingCost={shippingCost} />
      <h1 className="checkout-small-title">Delivery</h1>
      <p className="checkout-text">Select Branch Location</p>
      <div className="form-floating checkout-branch-select">
        <select
          value={selectedOption || ""}
          className="form-select"
          id="branchSelection"
          onChange={handleOptionChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="toronto">Toronto</option>
          <option value="brampton">Brampton</option>
          <option value="markham">Markham</option>
        </select>
        <label htmlFor="branchSelection">Branch</label>
      </div>
      {estimateDelivery && (
        <p className="checkout-subtitle">
          <strong>Estimated Delivery: </strong>
          {estimateDelivery.toLocaleString([], {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      )}

      <button
        type="button"
        className="checkout-btn btn btn-outline-primary btn-lg"
        onClick={invoicePage}
      >
        Next
      </button>
    </div>
  );
}
