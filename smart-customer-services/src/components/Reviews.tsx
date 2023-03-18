import checkLogin from "@/auth/checkLogin";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Reviews() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);
  
  return <div className="">Reviews</div>;
}
