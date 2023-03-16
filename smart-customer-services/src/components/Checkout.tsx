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

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [shippingCost, setShippingCost] = useState<number>(0);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Number(e.target.value);
    setSelectedOption(selected);
    setShippingCost(selected);
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
          <option value={10}>Toronto</option>
          <option value={12}>Brampton</option>
          <option value={15}>Markham</option>
        </select>
        <label htmlFor="branchSelection">Branch</label>
      </div>
      <p className="checkout-subtitle">Estimated Delivery</p>
      <p className="checkout-text">Date: </p>
      <p className="checkout-text">Time: </p>

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
