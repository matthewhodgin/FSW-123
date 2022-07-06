import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList(props) {
  console.log(props);
  console.log(props.todos);

  return (
    <ul
      style={{
        listStyle: "none",
      }}
    >
      {props.todos.map((todo, index) => {
        return (
          <div key={index}>
            <Todo
              todo={todo}
              completeTodo={props.completeTodo}
              deleteTodo={props.deleteTodo}
              editTodo={props.editTodo}
            />
          </div>
        );
      })}
    </ul>
  );
}

export default TodoList;