import isAdmin from "@/auth/isAdmin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminControllPanel() {
  const navigate = useNavigate();

  useEffect(() => {
    isAdmin(navigate);
  }, [navigate]);

  return <div>AdminControllPanel</div>;
}

export default AdminControllPanel;
