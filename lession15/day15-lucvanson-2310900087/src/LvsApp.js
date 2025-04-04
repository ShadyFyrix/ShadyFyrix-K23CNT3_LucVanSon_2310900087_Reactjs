import React from "react";
import LvsNavBar from "./components/LvsNavbar";

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
          Lục Văn Sơn - MockAPI - Mini Project
        </h1>
        <p className="text-center lead">Thực hành MockAPI</p>
        <LvsNavBar />
      </div>
    </div>
  );
}

export default LvsApp;
