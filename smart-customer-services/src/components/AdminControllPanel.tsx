import isAdmin from "@/auth/isAdmin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminControllPanel() {
  const navigate = useNavigate();
  const [items, setItems] = useState<Array<any>>([]);

  function getData() {
    axios
      .get("http://localhost:3000/allitems", {
        headers: { "x-access-token": localStorage.getItem("token") || "" },
      })
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    isAdmin(navigate);
  }, [navigate]);

  return (
    <div>
      <h1>Admin Controll Panel</h1>
      <button onClick={getData}>data</button>
      <ul>
        {items.map((item: any, i) => (
          <li key={i}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminControllPanel;
