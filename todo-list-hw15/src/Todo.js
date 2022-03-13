import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";
import "./App.css";

function Todo({ todos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className="todo-row">
      <input type="checkbox" className="check-box" />

      <div key={todo.id}>{todo.text}</div>

      <div>
        <button onClick={() => removeTodo(todo.id)} className="delet-btn">
          Delet
        </button>
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-btn"
        >
          Edit
        </button>
      </div>
    </div>
  ));
}

export default Todo;
