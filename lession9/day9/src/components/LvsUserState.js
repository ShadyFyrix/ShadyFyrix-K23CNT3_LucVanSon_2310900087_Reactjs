import React, { useState } from "react";

export default function LvsUserState() {
  //tạo hàm state là count và hàm cập nhạp state là setCount
  const [count, setCount] = useState(0);
  //hàm xử lý event tăng giá trị count
  const LvsHandleTang = () => {
    setCount(count + 1);
  };
  //state là mảng List
  const danh_sach = [100, 200, 300, 400, 500];
  //Khởi tạo state
  const [List, setList] = useState(danh_sach);
  //hàm xử lý event thêm giá trị ngẫu nhiên mới vào Danh sách
  const LvsHandleAddNewRandom = () => {
    setList([...List, parseInt(Math.random() * 1000)]);
  };
  return (
    <div>
      LvsUserState
      <h2>Sử dụng useState </h2>
      <div>
        <b>Count: {count}</b>
        <button onClick={LvsHandleTang}>Tăng</button>
        <button onClick={() => setCount(count - 1)}>Giảm</button>
        <button onClick={() => setCount(0)}>Đặt Lại</button>
      </div>
      <div>
        <h3>List: {List.toString()}</h3>
        <button onClick={LvsHandleAddNewRandom}>Add New (Random)</button>
      </div>
    </div>
  );
}
