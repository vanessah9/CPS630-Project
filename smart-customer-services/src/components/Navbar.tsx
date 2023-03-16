import User from "@/assets/icons/user.svg";
import ShoppingCart from "@/assets/icons/shopping-cart.svg";
import NavItem from "./NavItem";
import NavButton from "./NavButton";

interface InputProps {
  name?: String;
}

export default function Navbar(props: InputProps) {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg fixed-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#landing">
            SCS
          </a>
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
              <NavItem text="Home" link="#landing" dropdown={false} />
              <NavItem text="About" link="#about" dropdown={false} />
              <NavItem
                text="Services"
                dropdown={true}
                dropdown_items={[
                  ["Online Shopping", "#services-shopping"],
                  ["Delivery", "#services-delivery"],
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
                  ["Signup", "./signup"],
                ]}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
