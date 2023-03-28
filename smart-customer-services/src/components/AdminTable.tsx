import axios from "axios";
import { useState } from "react";

interface AdminTableProps {
  columns: string[];
  tableName: string;
}

export default function AdminTable<T>(props: AdminTableProps) {
  const [items, setItems] = useState<Array<T>>([]);

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

  const getItems = (tableName: string) => {
    axios
      .get(`http://localhost:3000/admin/${tableName}/all`, {
        headers: { "x-access-token": localStorage.getItem("token") || "" },
      })
      .then((res) => {
        console.log(res);
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addItem = (tableName: string) => {
    axios
      .post(`http://localhost:3000/admin/${tableName}/`, data, {
        headers: { "x-access-token": localStorage.getItem("token") || "" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItem = (tableName: string, id: string) => {
    axios
      .delete(`http://localhost:3000/admin/${tableName}/${id}`, {
        headers: { "x-access-token": localStorage.getItem("token") || "" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateItem = (tableName: string, id: string) => {
    axios
      .put(`http://localhost:3000/admin/${tableName}/${id}`, data, {
        headers: { "x-access-token": localStorage.getItem("token") || "" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = () => {};

  const handleDelete = () => {};

  const handleUpdate = () => {};

  return (
    <div>
      <h1>Admin Table</h1>
      <button>Add New Record</button>
      <table>
        <tr>
          {props.columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
        <tr>
          <button>Update</button>
        </tr>
        <tr>
          <button>Delete</button>
        </tr>
      </table>
    </div>
  );
}
