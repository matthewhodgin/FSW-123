function Todos(props) {
  console.log(props);
  console.log(props.array);

  return (
    <li
      style={{
        textDecoration: props.todo.isCompleted ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={props.todo.isCompleted}
        onChange={() => props.completeTodo(props.todo.id)}
      />
      <span> {props.todo.text} </span> &nbsp;&nbsp;
      <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>{" "} &nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" id="edit-button">
        Edit
      </button>
    </li>
  );
}

export default Todos;
