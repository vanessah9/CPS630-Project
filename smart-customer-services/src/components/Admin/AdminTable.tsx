import axios from "axios";
import { useState, useEffect } from "react";

interface AdminTableProps {
  columns: string[];
  tableName: string;
}

export default function AdminTable<T>(props: AdminTableProps) {
  const [data, setData] = useState<any>([]);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    getItems(props.tableName);
  }, [props.tableName]);

  const getItems = (tableName: string) => {
    axios
      .get(`http://localhost:3000/admin/${tableName}/all`, {
        headers: { "x-access-token": localStorage.getItem("token") || "" },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addItem = (tableName: string) => {
    axios
      .post(`http://localhost:3000/admin/${tableName}/`, formData, {
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
      .put(`http://localhost:3000/admin/${tableName}/${id}`, formData, {
        headers: { "x-access-token": localStorage.getItem("token") || "" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = () => {
    addItem(props.tableName);
  };

  const handleUpdate = (id: string) => {
    updateItem(props.tableName, id);
  };

  const handleDelete = (id: string) => {
    deleteItem(props.tableName, id);
  };

  
  const logFormData = () => {
    console.log(formData);
  }
  const renderAdminForm = ({ labels }: any) => {
    return (
      <form>
        <h3>Form to Add/Update Record</h3>
        {labels.map((label: any) => (
          <div key={label}>
            <label>{label}: </label>
            <input
              type="text"
              value={formData[label] || ""}
              onChange={(e) =>
                setFormData({ ...formData, [label]: e.target.value })
              }
              required
            />
          </div>
        ))}
      </form>
    );
  };

  return (
    <div>
      {renderAdminForm({ labels: props.columns })}
      <button className="admin-btn" onClick={handleAdd}>Add New Record</button>
      <table className="admin">
        <thead>
          <tr>
            {props.columns.map((c) => (
              <th className="admin-head" key={c}>
                {c}
              </th>
            ))}
            <th className="admin-head">Update</th>
            <th className="admin-head">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: any) => (
            <tr className="admin-row" key={index}>
              {props.columns.map((column) => (
                <td className="admin-body" key={column}>
                  {item[column]}
                </td>
              ))}
              <td className="admin-body">
                <button
                  className="btn admin-btn"
                  onClick={() => handleUpdate(item._id)}
                >
                  Update
                </button>
              </td>
              <td className="admin-body">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
