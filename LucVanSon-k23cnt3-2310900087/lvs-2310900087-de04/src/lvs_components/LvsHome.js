import React from "react";

export default function LvsHome() {
  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/dark-blue-waves-dots-abstract-background_79603-879.jpg?t=st=1742397126~exp=1742400726~hmac=e27576d12ce8864badeae450a51d6d9fa01d60556afd3b577a44c3ffa5811704&w=1380')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="text-center text-white p-5 animate__animated animate__fadeIn"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
        }}
      >
        <h1 className="display-4 animate__animated animate__bounce">
          Lục Văn Sơn - 2310900087 - K23CNT3
        </h1>
        <p className="lead animate__animated animate__fadeInUp">
          Email: shadyfyrix@gmail.com
        </p>
      </div>
    </div>
  );
}
