import User from "@/assets/icons/user.svg";
import ShoppingCart from "@/assets/icons/shopping-cart.svg";
import NavItem from "./NavItem";
import NavButton from "./NavButton";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function signout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg fixed-top shadow">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            SCS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem text="Home" link="/" dropdown={false} />
              <NavItem text="About" link="/" dropdown={false} />
              <NavItem
                text="Services"
                dropdown={true}
                dropdown_items={[
                  ["Online Shopping", "/services-shopping"],
                  ["Delivery", "/services-delivery"],
                ]}
              />
              <NavItem text="Reviews" link="./reviews" dropdown={false} />
              <NavItem text="Contact" link="./contact" dropdown={false} />
            </ul>

            <div className="navbar-nav dropdown-center">
              <NavButton
                icon={ShoppingCart}
                dropdown_items={[
                  ["View Cart", "./cart"],
                  ["Checkout", "./checkout"],
                ]}
              />
              <NavButton
                icon={User}
                dropdown_items={[
                  ["Login", "./login"],
                  ["Sign Up", "./signup"],
                ]}
              />
            </div>
            {(location.pathname != "/login" &&
              location.pathname != "/signup") && (
                <NavButton
                  text="Sign Out"
                  onClick={signout}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}