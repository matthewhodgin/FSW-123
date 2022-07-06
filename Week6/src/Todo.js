import { useState } from "react";
import TodoForm from "./TodoForm";

function Todos({ deleteTodo, editTodo, completeTodo, todo }) {
  const [editToggle, setEditToggle] = useState(false);

  return !editToggle ? (
    <li
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />
      <span> {todo.text} </span> &nbsp;&nbsp;
      <button onClick={() => deleteTodo(todo.id)}>X</button>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => setEditToggle((prevToggle) => !prevToggle)}
        className="edit-btn"
      >
        Edit
      </button>
    </li>
  ) : (
    <>
      <TodoForm
        text={todo.text}
        id={todo.id}
        btnText="Submit Edit"
        submit={(inputs, id) => {
          editTodo(inputs, id);
          setEditToggle((prevToggle) => !prevToggle);
        }}
      />
      <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
        Close
      </button>
    </>
  );
}

export default Todos;
