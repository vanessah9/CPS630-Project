import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import checkLogin from "@/auth/checkLogin";
import { getLoggedInUser } from "@/api/userApi";

export default function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  const [browserName, setBrowserName] = useState("");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const user = await getLoggedInUser();
    setUser(user);
  };

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

  useEffect(() => {}, [browserName]);
  return (
    <div>
      <h1>
        Welcome Back, {user.firstName} {user.lastName}
      </h1>
      <div>
        <h2>Account Information</h2>
        <div>Email: {user.email}</div>
        <div>Phone Number: {user.phoneNo}</div>
        <div>Address: {user.address}</div>
        <div>City: {user.city}</div>
        <div>Powered by {browserName}</div>
      </div>
    </div>
  );
}
