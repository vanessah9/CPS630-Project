import checkLogin from "@/auth/checkLogin";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import DeliveryMap from "./DeliveryMap";
import { getInvoiceItems } from "@/api/invoiceApi";

export default function Invoice() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formValid, setFormValid] = useState(false);

  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    // todo: add payment validation here
    setCardNumber(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const form = e.currentTarget.form;
    if (form) {
      setFormValid(form.checkValidity());
    }
  };

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  const back = () => {
    navigate("/checkout");
  };

  const OrderConfirmPage = () => {
    navigate("/orderConfirmation");
  };

  const shippingCost = location.state?.shippingCost;
  const branchCoords = location.state?.branchCoords;
  const userCoords = location.state?.userCoords;
  const invoiceItems = location.state?.cartItems;

  return (
    <div className="invoice">
      <h1 className="invoice-title">Invoice</h1>
      {invoiceItems && (
        <ItemsTable
          items={invoiceItems.cartItems}
          isInvoice={true}
          shippingCost={shippingCost.shippingCost}
        />
      )}

      <h3>Delivery Route</h3>
      <DeliveryMap
        branch={branchCoords.branchCoords}
        address={userCoords.userCoords}
      />
      <form className="was-validated invoice-checkbox">
        <div>
          <label htmlFor="ccn">Credit Card Number:</label>
          <input
            id="ccn"
            type="tel"
            value={cardNumber}
            onChange={handleCardNumberChange}
            pattern="[0-9\s]{13,19}"
            maxLength={19}
            placeholder="xxxx xxxx xxxx xxxx"
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="validationFormCheck1"
            onChange={handleInputChange}
            required
          />
          <label className="form-check-label" htmlFor="validationFormCheck1">
            I accept.
          </label>
          <div className="invalid-feedback">
            Please accept this invoice before submitting order.
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center invoice-btns">
        <button
          type="button"
          className="btn btn-lg btn-outline-secondary btn-block m-2"
          onClick={back}
        >
          Back
        </button>
        <button
          type="submit"
          className="btn btn-lg btn-outline-primary btn-block m-2"
          onClick={OrderConfirmPage}
          disabled={!formValid}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
