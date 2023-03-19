import checkLogin from "@/auth/checkLogin";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import DeliveryMap from "./DeliveryMap";
import { getInvoiceItems } from "@/api/invoiceApi";

export default function Invoice() {
  const navigate = useNavigate();
  const location = useLocation();

  const [invoiceItems, setInvoiceItems] = useState([]);

  useEffect(() => {
    const fetchInvoiceItems = async () => {
      const invoiceData = await getInvoiceItems();
      setInvoiceItems(invoiceData);
    };
    fetchInvoiceItems();
  }, []);

//   console.log("invoice", invoiceItems)

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  const back = () => {
    navigate("/checkout");
  };
  const OrderConfirmPage = () => {
    navigate("/orderConfirmation");
  };

  const stateProps = location.state?.shippingCost;

  return (
    <div className="invoice">
      <h1 className="invoice-title">Invoice</h1>
      <ItemsTable items={invoiceItems} isInvoice={true} shippingCost={stateProps.shippingCost} />
      <DeliveryMap branch={"Toronto"} address={"Markham"} />
      <div className="d-flex justify-content-center">
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
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}