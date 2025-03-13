import React from "react";
import LvsTodoItem from "./LvsTodoItem";

const LvsTodoList = ({ todos = [], toggleComplete, removeTodo }) => {
  if (!Array.isArray(todos)) {
    return <p>No tasks available.</p>;
  }

  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <LvsTodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default LvsTodoList;
