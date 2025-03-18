import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LvsReadApiLocal() {
  const [LvsListUser, setLvsListUser] = useState([]);
  //Đọc dữ liêu từ API Local và set LvsListUser
  const apiLocal = "http://localhost:3001/users";
  //láy dữ liệu từ API Local
  useEffect(() => {
    axios
      .get(apiLocal)
      .then((res) => {
        setLvsListUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>Đọc dữ liệu từ API Local</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>FullName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {LvsListUser.map((LvsItem, index) => {
            return (
              <tr>
                <td>{LvsItem.fullName}</td>
                <td>{LvsItem.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
