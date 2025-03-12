import "./App.css";
import React, { useState } from "react";
import LvsProductList from "./components/LvsProductList";
import LvsProductAdd from "./components/LvsProductAdd";

function LvsApp() {
  const [products, setProducts] = useState([
    {
      Lvspid: "2310900087",
      LvspName: "Lục Văn Sơn",
      LvspQuality: 1,
      LvspPrice: 696969,
    },
    { Lvspid: "P001", LvspName: "Laptop", LvspQuality: 10, LvspPrice: 1500 },
    { Lvspid: "P002", LvspName: "Smartphone", LvspQuality: 20, LvspPrice: 800 },
  ]);
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    console.log("New Product Added:", newProduct);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.PUBLIC_URL}/image/chill.jpg`}
          alt="Spinning"
          className="App-logo"
        />
        <div className="container mt-4">
          <h1 className="text-center text-primary">
            <i className="fas fa-boxes"></i> Danh Sách Sản Phẩm
          </h1>
          <div className="row">
            <div className="col-md-6">
              <LvsProductList products={products} />
            </div>
            <div className="col-md-6">
              <LvsProductAdd addProduct={addProduct} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default LvsApp;
