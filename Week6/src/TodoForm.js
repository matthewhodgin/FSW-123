import TodoList from "./TodoList";

export default function TodoForm(props) {
  return (
    <div className="App">
      <h3> Todo App </h3>
      <h4> Add new todos via the input field:</h4>
      <input type="text" name="Add Todo" /> &nbsp;
      <input type="submit" value="Add Todo" onclick="return Todo();" />

      <TodoList
        todos={props.todos}
        completeTodo={props.completeTodo}
        deleteTodo={props.deleteTodo}
        editTodo={props.editTodo}
      />
    </div>
  );
}


// <input
// type="input"
// checked={props.todo.isEdited}
// onChange={() => props.editTodo(props.todo.id)}
// />

// <button onClick={() => props.editTodo(props.todo.id)}>X</button>
