import React from "react";

const LvsProductList = ({ products }) => {
  return (
    <div className="card shadow-lg">
      <div className="card-header bg-primary text-white">
        <h4>
          <i className="fas fa-list"></i> Danh Sách Sản Phẩm
        </h4>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>
                <i className="fas fa-id-badge"></i> ID Sản Phẩm
              </th>
              <th>
                <i className="fas fa-box"></i> Tên Sản Phẩm
              </th>
              <th>
                <i className="fas fa-sort-numeric-up"></i> Chất Lượng
              </th>
              <th>
                <i className="fas fa-dollar-sign"></i> Giá
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <strong>{product.Lvspid}</strong>
                </td>
                <td>{product.LvspName}</td>
                <td>{product.LvspQuality}</td>
                <td>{product.LvspPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LvsProductList;
