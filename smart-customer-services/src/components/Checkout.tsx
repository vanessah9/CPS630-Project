import { useLocation, useNavigate } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import { ChangeEvent, useEffect, useState } from "react";
import checkLogin from "@/auth/checkLogin";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState("");
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [branchLoc, setBranchLoc] = useState("");
  const [estimateDelivery, setEstimateDelivery] = useState<Date | null>(null);
  const [formValid, setFormValid] = useState(false);

  const cartItems = location.state?.cartItems;

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  const invoicePage = () => {
    navigate("/invoice", {
      state: {
        shippingCost: { shippingCost },
        branchLoc: { branchLoc },
        cartItems: { cartItems },
      },
    });
  };

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const form = e.currentTarget.form;

    if (form) {
      setFormValid(form.checkValidity());
    }

    const selected = e.target.value;
    setSelectedOption(selected);

    let daysToAdd = 0;
    let hoursToAdd = 0;
    let shipping = 0;
    let branch = "";

    switch (selected) {
      case "toronto":
        daysToAdd = 1;
        hoursToAdd = 5;
        shipping = 10;
        branch = "350 Victoria St, Toronto, ON M5B 2K3";
        break;
      case "brampton":
        daysToAdd = 3;
        hoursToAdd = 10;
        shipping = 12;
        branch = "27 Church St W, Brampton, ON L6X 1H2";
        break;
      case "markham":
        daysToAdd = 5;
        hoursToAdd = 5;
        shipping = 15;
        branch = "Main Street Markham N, Markham, ON L3P 1Y6";
        break;
      default:
        daysToAdd = 0;
        hoursToAdd = 0;
        shipping = 0;
        branch = "";
    }

    const currentDate = new Date();
    const deliveryDate = new Date(
      currentDate.getTime() +
        daysToAdd * 24 * 60 * 60 * 1000 +
        hoursToAdd * 60 * 60 * 1000
    );

    setEstimateDelivery(deliveryDate);
    setShippingCost(shipping);
    setBranchLoc(branch);
    console.log(branch);
  };

  return (
    <div className="checkout">
      <h1 className="checkout-title">Checkout</h1>
      {/* <p className="checkout-text">Review Cart Items</p> */}
      {/* <ItemsTable shippingCost={shippingCost} /> */}
      <h1 className="checkout-small-title">Delivery</h1>
      <p className="checkout-text">Select Branch Location</p>
      <form className="was-validated">
        <div className="mb-3 form-floating checkout-branch-select">
          <select
            value={selectedOption || ""}
            className="form-select"
            id="branchSelection"
            onChange={handleOptionChange}
            required
          >
            <option value="" selected disabled>
              Select an option
            </option>
            <option value="toronto">Toronto</option>
            <option value="brampton">Brampton</option>
            <option value="markham">Markham</option>
          </select>
          <label htmlFor="branchSelection">Branch</label>
          <div className="invalid-feedback">Please select a branch.</div>
        </div>
      </form>

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
        disabled={!formValid}
      >
        Next
      </button>
    </div>
  );
}
