import isAdmin from "@/auth/isAdmin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminControllPanel() {
  const navigate = useNavigate();
  const [items, setItems] = useState<Array<any>>([]);
  // const [data, setData] = useState<any>({});

  const data = {
    name: "fries",
    description: "McDonald's French fries the best in the game",
    price: 2.02,
    quantity: 1,
    madeIn: "Canada",
    deptCode: "1200",
    category: "food",
    image:
      "https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg",
    rating: 0,
  };

  useEffect(() => {
    isAdmin(navigate);
  }, [navigate]);

  return (
    <div>
      <h1>Admin Controll Panel</h1>
      
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
