import checkLogin from "@/auth/checkLogin";
import registerHandler from "@/auth/registerHandler";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  function handleSubmit(e: any) {
    e.preventDefault();
    registerHandler(formData).then((res) => {
      alert(res.message);
      navigate("/");
    }).catch((err) => {
      alert(err.message);
    });
  }

  return (
    <div className="signup">
      <h1 className="signup-title">Sign Up</h1>
      <form>
        <div className="row g-2 signup-row">
          <div className="col-md">
            <div className="form-floating">
              <input
                type="name"
                className="form-control"
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="name"
                className="form-control"
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
        </div>
        <div className="row g-2 signup-row">
          <div className="col-md">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label htmlFor="email">Email Address</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={formData.phoneNo}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNo: e.target.value })
                }
              />
              <label htmlFor="phone">Phone Number</label>
            </div>
          </div>
        </div>
        <div className="row g-2 signup-row">
          <div className="col-md">
            <div className="form-floating">
              <input
                type="text"
                className="form-control autocomplete-address"
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
              <label htmlFor="address">Home Address</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
              <label htmlFor="country">Country</label>
            </div>
          </div>
        </div>
        <div className="row g-2 signup-row">
          <div className="col-md">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="city"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
              <label htmlFor="city">City</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="province"
                value={formData.province}
                onChange={(e) =>
                  setFormData({ ...formData, province: e.target.value })
                }
              />
              <label htmlFor="province">Province</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="postal"
                value={formData.postalCode}
                onChange={(e) =>
                  setFormData({ ...formData, postalCode: e.target.value })
                }
              />
              <label htmlFor="postal">Postal Code</label>
            </div>
          </div>
        </div>
        <div className="row g-2 signup-row">
          <div className="col-md">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <label htmlFor="confirmPassword">Re-type Password</label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg signup-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
