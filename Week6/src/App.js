import { useState } from "react";
import { listoftodos } from "./data";
import { v4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(listoftodos);

  const addTodo = (inputs) => {
    const newTodos = [
      ...todos,
      {
        id: v4(),
        text: inputs.text,
        isCompleted: false,
      },
    ];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const temporaryTodos = [...todos];
    const index = temporaryTodos.findIndex((todo) => todo.id === id);
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  };

  const deleteTodo = (id) => {
    const temporaryTodos = [...todos];
    const newTodos = temporaryTodos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (inputs, id) => {
    const temporaryTodos = [...todos];
    const index = temporaryTodos.findIndex((todo) => todo.id === id);
    temporaryTodos[index].text = inputs.text;
    setTodos(temporaryTodos);
  };

  return (
    <div className="App">
      <h3> List of Todos </h3>
      <TodoForm submit={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
