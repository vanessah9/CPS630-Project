import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import checkLogin from "@/auth/checkLogin";

export default function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  const [browserName, setBrowserName] = useState("");

  useEffect(() => {
    let userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) {
      setBrowserName("Google Chrome");
    } else if (userAgent.includes("Firefox")) {
      setBrowserName("Mozilla Firefox");
    } else if (userAgent.includes("Safari")) {
      setBrowserName("Apple Safari");
    } else if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
      setBrowserName("Microsoft Internet Explorer");
    } else {
      setBrowserName("Unknown");
    }
  }, [browserName]);

  return (
    <div>
      <h1>Welcome Back, USERNAME_HERE</h1>
      <div>
        <h2>Account Information</h2>
        <div>Email: </div>
        <div>Phone Number: </div>
        <div>Address: </div>
        <div>Country: </div>
        <div>Powered by {browserName}</div>
      </div>
      <div>
        <h2>Previous Orders</h2>
        <div>Order #1</div>
        <div>Insert Information Here</div>
      </div>
    </div>
  );
}
