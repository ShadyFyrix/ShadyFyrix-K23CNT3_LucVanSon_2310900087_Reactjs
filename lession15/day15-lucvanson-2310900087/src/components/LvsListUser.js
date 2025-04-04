import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function LvsListUser() {
  const [LvsListUsers, setLvsListUsers] = useState([]);
  const LvsApiOnline =
    "https://67d8d4c400348dd3e2a85d27.mockapi.io/k23cnt3_lucvanson/lvs_users";

  useEffect(() => {
    axios
      .get(LvsApiOnline)
      .then((response) => setLvsListUsers(response.data))
      .catch((error) => console.log("Lỗi:", error));
  }, []);

  const LvsHandleDelete = (lvsId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      axios
        .delete(`${LvsApiOnline}/${lvsId}`)
        .then(() => {
          setLvsListUsers((prevUsers) =>
            prevUsers.filter((user) => user.lvsId !== lvsId)
          );
        })
        .catch((error) => console.log("Lỗi khi xóa:", error));
    }
  };

  const LvsElemenUsers = LvsListUsers.map((Lvs_Item) => (
    <tr key={Lvs_Item.lvsId} className="animate__animated animate__fadeIn">
      <td>{Lvs_Item.lvsId}</td>
      <td>{Lvs_Item.lvsFullName}</td>
      <td>{Lvs_Item.lvsAge}</td>
      <td>{Lvs_Item.lvsEmail}</td>
      <td>{Lvs_Item.lvsPhone}</td>
      <td>
        {Lvs_Item.lvsActive ? (
          <span className="badge bg-success">Hoạt động</span>
        ) : (
          <span className="badge bg-danger">Khóa</span>
        )}
      </td>
      <td>
        <Link
          to={`/EditUser/${Lvs_Item.lvsId}`}
          className="btn btn-primary btn-sm mx-1 animate__animated animate__pulse"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <button
          onClick={() => LvsHandleDelete(Lvs_Item.lvsId)}
          className="btn btn-danger btn-sm mx-1 animate__animated animate__shakeX"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  ));

  return (
    <div
      className="container mt-4"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/elegant-dynamic-flowing-wavy-line-blue-background_1017-56415.jpg?t=st=1742398064~exp=1742401664~hmac=ea90c642bcd4b67bb87828d715e3f356b6d2a13f173ed28a5ee4d516b38cce33&w=1800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>FullName</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{LvsElemenUsers}</tbody>
        </table>
      </div>
    </div>
  );
}
