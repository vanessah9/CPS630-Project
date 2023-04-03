import { useLocation, useNavigate } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import { ChangeEvent, useEffect, useState } from "react";
import checkLogin from "@/auth/checkLogin";

interface LatLng {
  lat: number;
  lng: number;
}

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState("");
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [branchCoords, setbranchCoords] = useState<LatLng>({ lat: 0, lng: 0 });
  const [userCoords, setUserCoords] = useState<LatLng>({ lat: 0, lng: 0 });
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
        branchCoords: { branchCoords },
        cartItems: { cartItems },
        userCoords: { userCoords },
      },
    });
  };

  useEffect(() => {
    const successCallback: PositionCallback = (
      position: GeolocationPosition
    ) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setUserCoords({ lat: lat, lng: lng });
    };
    const errorCallback: PositionErrorCallback = (
      error: GeolocationPositionError
    ) => {
      console.error(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

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
    let branch: LatLng = { lat: 0, lng: 0 };

    switch (selected) {
      case "toronto":
        daysToAdd = 1;
        hoursToAdd = 5;
        shipping = 10;
        branch = { lat: 43.65846934263289, lng: -79.38072022900987 };
        break;
      case "brampton":
        daysToAdd = 3;
        hoursToAdd = 10;
        shipping = 12;
        branch = { lat: 43.68705332804697, lng: -79.76470896326458 };
        break;
      case "markham":
        daysToAdd = 5;
        hoursToAdd = 5;
        shipping = 15;
        branch = { lat: 43.88286761838688, lng: -79.26252721301692 };
        break;
    }

    const currentDate = new Date();
    const deliveryDate = new Date(
      currentDate.getTime() +
        daysToAdd * 24 * 60 * 60 * 1000 +
        hoursToAdd * 60 * 60 * 1000
    );

    setEstimateDelivery(deliveryDate);
    setShippingCost(shipping);
    setbranchCoords(branch);
  };

  return (
    <div className="checkout">
      <h1 className="checkout-title">Checkout</h1>
      {/* <p className="checkout-text">Review Cart Items</p> */}
      {/* <ItemsTable shippingCost={shippingCost} /> */}
      <h1 className="checkout-small-title">Delivery</h1>
      <p className="checkout-text">Delivery Address</p>
      {(userCoords && userCoords.lat !== 0 && userCoords.lng !== 0) ? (
        <p className="checkout-subtitle">
          <strong>Latitude: </strong>
          {userCoords?.lat}, <strong>Longitude: </strong>
          {userCoords?.lng}
        </p>
      ) : (
        <p>
          <b>
            If haven't yet, please click allow on prompt for us to retrieve your
            coordinates. It may take a moment to load.
          </b>
        </p>
      )}
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
            <option value="" disabled>
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
        disabled={!formValid && !userCoords}
      >
        Next
      </button>
    </div>
  );
}
