import React from "react";

const LvsTodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>
        <i className="fas fa-trash-alt"></i> Xóa
      </button>
    </li>
  );
};

export default LvsTodoItem;
