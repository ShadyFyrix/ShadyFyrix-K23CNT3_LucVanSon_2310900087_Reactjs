import React, { useState } from "react";

const LvsAddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTodo(task);
    setTask("");
  };

  return (
    <form className="mt-3 d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Nhập công việc..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary ms-2">Thêm</button>
    </form>
  );
};

export default LvsAddTodo;
