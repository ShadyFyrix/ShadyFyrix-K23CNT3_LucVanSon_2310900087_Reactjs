import React from "react";
import LvsNavBar from "./lvs_components/LvsNavbar";

function LvsApp() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/elegant-flowing-wavy-line-white-backdrop-presentation_1017-56484.jpg?t=st=1742397516~exp=1742401116~hmac=c3ba484a72f3e79061de4cecc572862f05a5870946e11bb32c8be5c4fcb3dd88&w=1800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="container border my-3 p-3">
        <h1 className="text-center display-4">
          Bài thi cuối học phần - Lục Văn Sơn - 2310900087 - K23CNT3
        </h1>
        <LvsNavBar />
      </div>
    </div>
  );
}

export default LvsApp;
