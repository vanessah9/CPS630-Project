import isAdmin from "@/auth/isAdmin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminTable from "./AdminTable";

function AdminControllPanel() {
  const navigate = useNavigate();
  const [column, setColumn] = useState<string[]>([]);
  const [tableName, setTableName] = useState("");

  useEffect(() => {
    isAdmin(navigate);
  }, [navigate]);

  const itemColumns = [
    "name",
    "description",
    "price",
    "quantity",
    "madeIn",
    "deptCode",
    "category",
    "image",
  ];

  const orderColumns = [
    "userId",
    "tripId",
    "receiptId",
    "paymentMethod",
    "dateIssued",
    "dateReceived",
  ];

  const tripColumns = ["sourceCode", "location", "destination"];

  const userColumns = [
    "firstName",
    "lastName",
    "email",
    "phoneNo",
    "password",
    "address",
    "city",
    "province",
    "postalCode",
    "country",
    "balance",
    "isAdmin",
  ];

  const shoppingColumns = [
    "userId",
    "storeCode",
    "date",
    "time",
    "paymentMethod",
    "totalPrice",
  ];

  return (
    <div>
      <h1>Admin Control Panel</h1>
      <div>
        <button
          onClick={() => {
            setColumn(itemColumns); setTableName("item");
          }}
        >
          Items
        </button>
        <button
          onClick={() => {
            setColumn(orderColumns); setTableName("order");
          }}
        >
          Orders
        </button>
        <button
          onClick={() => {
            setColumn(tripColumns); setTableName("trip");
          }}
        >
          Trips
        </button>
        <button
          onClick={() => {
            setColumn(userColumns); setTableName("user");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setColumn(shoppingColumns); setTableName("shopping");
          }}
        >
          Shopping
        </button>
      </div>
      {tableName && <AdminTable columns={column} tableName={tableName} />}
    </div>
  );
}

export default AdminControllPanel;
