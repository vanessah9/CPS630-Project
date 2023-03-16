import { useNavigate, useLocation } from "react-router-dom";
import ItemsTable from "./ItemsTable";


export default function Invoice() {
  const location = useLocation();
  const navigate = useNavigate();

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
      <ItemsTable invoice={true} shippingCost={stateProps.shippingCost} />
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
