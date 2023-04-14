import axios from "axios";
import { useState, useEffect } from "react";

interface AdminTableProps {
  columns: string[];
  tableName: string;
}

export default function AdminTable<T>(props: AdminTableProps) {
  const [data, setData] = useState<any>([]);
  const [formData, setFormData] = useState<any>({});
  const [showModal, setShowModal] = useState(false);
  const [currId, setCurrId] = useState("");
  useEffect(() => {
    getItems(props.tableName);
  }, [props.tableName]);

  const getItems = (tableName: string) => {
    axios
      .get(`http://localhost:3000/admin/${tableName}/all`, {
        headers: { "x-access-token": localStorage.getItem("token") || "" },
      })
      .then((res) => {
        console.log(res);
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

  const renderAdminForm = ({ labels }: any) => {
    return (
      <form>
        <h3>Modify Data</h3>
        <div className="form-flex-container">
          {labels.map((label: any) => (
            <div className="form-floating" key={label}>
              <input
                className="form-control admin-input"
                type="text"
                value={formData[label] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [label]: e.target.value })
                }
                required
              />
              <label htmlFor={label}>{label}</label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="admin-btn"
          onClick={() => {
            currId ? handleUpdate(currId) : handleAdd();
          }}
        >
          {currId ? "Update Record" : "Add Record"}
        </button>
      </form>
    );
  };

  console.log(props.columns);
  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            {renderAdminForm({ labels: props.columns })}
          </div>
        </div>
      )}

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
              {props.columns.map((column) =>
                column === "image" ? (
                  <td key={column}>
                    <img
                      className="admin-img"
                      src={item[column] ? item[column] : ''}
                      alt={column}
                    />
                  </td>
                ) : (
                  <td className="admin-body" key={column}>
                    {item[column] ? item[column].toString() : ''}
                  </td>
                )
              )}
              <td className="admin-body">
                <button
                  className="btn admin-btn"
                  onClick={() => {
                    console.log(item);
                    setCurrId(item._id);
                    setShowModal(true);
                  }}
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
      <div className="add">
        <div className="add-btn">
          <button
            type="submit"
            className="admin-btn"
            onClick={() => {
              setShowModal(true);
              setCurrId("");
            }}
          >
            Add New Record
          </button>
        </div>
      </div>
    </div>
  );
}
