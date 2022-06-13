import './App.css';
import {useState} from 'react';
import TodoList from './TodoList';
import { listoftodos } from './data';
import TodoForm from './TodoForm';

export default function App() {

const [todos, setTodos] = useState(listoftodos);

const completeTodo = id => {
    const temporaryTodos = [...todos];
    const index = temporaryTodos.findIndex(todo => todo.id === id);
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
};


const deleteTodo = (id) => {
    const temporaryTodos = [...todos];
    const newTodos = temporaryTodos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
};


    return (
      <div className="App">
        <h3> List of Todos </h3> 
        <TodoList todos = {todos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
      </div>
    );
}