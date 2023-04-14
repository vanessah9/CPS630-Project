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

  const tripColumns = [
    "destinationCode",
    "distance",
    "price",
    "sourceCode",
    "status",
    "truckId",
  ];

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
      <h1 className="admin-title">Admin Control Panel</h1>
      <div className="admin-nav">
        <button
          className={tableName === "item" ? "admin-btn active" : "admin-btn"}
          onClick={() => {
            setColumn(itemColumns);
            setTableName("item");
          }}
        >
          Items
        </button>
        <button
          className={tableName === "order" ? "admin-btn active" : "admin-btn"}
          onClick={() => {
            setColumn(orderColumns);
            setTableName("order");
          }}
        >
          Orders
        </button>
        <button
          className={tableName === "trip" ? "admin-btn active" : "admin-btn"}
          onClick={() => {
            setColumn(tripColumns);
            setTableName("trip");
          }}
        >
          Trips
        </button>
        <button
          className={tableName === "user" ? "admin-btn active" : "admin-btn"}
          onClick={() => {
            setColumn(userColumns);
            setTableName("user");
          }}
        >
          Users
        </button>
        <button
          className={
            tableName === "shopping" ? "admin-btn active" : "admin-btn"
          }
          onClick={() => {
            setColumn(shoppingColumns);
            setTableName("shopping");
          }}
        >
          Shopping
        </button>
      </div>
      {tableName ? (
        <AdminTable columns={column} tableName={tableName} />
      ) : (
        <p>Please select a table</p>
      )}
    </div>
  );
}

export default AdminControllPanel;
