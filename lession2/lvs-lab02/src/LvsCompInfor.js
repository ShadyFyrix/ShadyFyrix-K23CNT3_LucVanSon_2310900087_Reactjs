import React from "react";

function LvsCompInfor({ info }) {
  return (
    <div style={{ border: "2px solid #333", padding: "20px", borderRadius: "10px", width: "50%", margin: "auto" }}>
      <p><strong>Họ và tên:</strong> {info.hoTen}</p>
      <p><strong>Mã sinh viên:</strong> {info.maSV}</p>
      <p><strong>Ngày sinh:</strong> {info.ngaySinh}</p>
      <p><strong>Điện thoại:</strong> {info.dienThoai}</p>
      <p><strong>Tên lớp:</strong> {info.tenLop}</p>
    </div>
  );
}

export default LvsCompInfor;
