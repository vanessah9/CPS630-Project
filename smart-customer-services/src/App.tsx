import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Reviews from "./components/Reviews/Reviews";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Cart from "./components/Orders/Cart";
import Checkout from "./components/Orders/Checkout";
import Invoice from "./components/Orders/Invoice";
import OrderConfirmation from "./components/Orders/OrderConfirmation";
import Shopping from "./components/Shopping/Shopping";
import Profile from "./components/Profile/Profile";
import AdminControllPanel from "./components/Admin/AdminControllPanel";
import PastOrders from './components/Orders/PastOrders';

function App() {
  return (
    <Router>
      <div>
        <div className="nav-div">
          <Navbar />
        </div>
        <div className="content-div">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/orderConfirmation" element={<OrderConfirmation />} />
            <Route path="/services-shopping" element={<Shopping />} />
            <Route path="/past-orders" element={<PastOrders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminControllPanel />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
