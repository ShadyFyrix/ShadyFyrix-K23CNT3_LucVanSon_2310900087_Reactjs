import React, { useState } from "react";

const LvsProductAdd = ({ addProduct }) => {
  const [product, setProduct] = useState({
    Lvspid: "",
    LvspName: "",
    LvspQuality: "",
    LvspPrice: "",
  });

  const LvsHandleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const LvsHandleSubmit = (e) => {
    e.preventDefault();
    if (!product.Lvspid || !product.LvspName) {
      alert("Product ID and Name are required!");
      return;
    }
    addProduct(product);
    console.log("Product Added:", product);
    alert("Thêm Thành Công, Check console.");
    setProduct({ Lvspid: "", LvspName: "", LvspQuality: "", LvspPrice: "" });
  };

  return (
    <div className="card shadow-lg">
      <div className="card-header bg-success text-white">
        <h4>
          <i className="fas fa-plus"></i> Thêm Sản Phẩm
        </h4>
      </div>
      <div className="card-body">
        <form onSubmit={LvsHandleSubmit}>
          <div className="mb-3">
            <label className="form-label">ID Sản Phẩm</label>
            <input
              type="text"
              className="form-control"
              name="Lvspid"
              value={product.Lvspid}
              onChange={LvsHandleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tên Sản Phẩm</label>
            <input
              type="text"
              className="form-control"
              name="LvspName"
              value={product.LvspName}
              onChange={LvsHandleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Chất Lượng</label>
            <input
              type="number"
              className="form-control"
              name="LvspQuality"
              value={product.LvspQuality}
              onChange={LvsHandleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Giá</label>
            <input
              type="number"
              className="form-control"
              name="LvspPrice"
              value={product.LvspPrice}
              onChange={LvsHandleChange}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            <i className="fas fa-check"></i> Thêm Sản Phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default LvsProductAdd;
