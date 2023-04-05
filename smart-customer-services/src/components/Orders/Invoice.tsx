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
    setCardNumber(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const form = e.currentTarget.form;
    if (form) {
      setFormValid(form.checkValidity());
    }
    handleCardNumberChange(e);
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

      <h3>Payment</h3>
      <form className="was-validated invoice-form">
        <div className="col-md-6 invoice-form-elem">
          <label htmlFor="cc-number" className="form-label">
            Credit card number
          </label>
          <input
            type="text"
            className="form-control"
            id="ccn"
            onChange={handleInputChange}
            pattern="[0-9\s]{13,19}"
            maxLength={19}
            placeholder="xxxx xxxx xxxx xxxx"
            required
          />
          <div className="invalid-feedback">Credit card number is required</div>
        </div>
        <div className="form-check col-md-6 invoice-form-elem">
          <input
            type="checkbox"
            className="form-check-input"
            id="invoiceCheckbox"
            onChange={handleInputChange}
            required
          />
          <label className="form-check-label" htmlFor="invoiceCheckbox">
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
