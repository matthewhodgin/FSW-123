import {useState} from 'react';
import { listoftodos } from './data';
import { uuidv4 } from 'react';
import TodoForm from './TodoForm';

export default function App() {

const [todos, setTodos] = useState(listoftodos);

const addTodo = text => {
    const newTodos = [ ...todos, { 
    id: uuidv4(), text: text, 
    isCompleted: false } ]; 
    setTodos(newTodos); 
}; 
  
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

const editTodo = (id) => {
  const temporaryTodos = [...todos];
  const newTodos = temporaryTodos.filter((todo) => todo.id !== id);
  setTodos(newTodos);
};


    return (
      <div className="App">
        <h3> List of Todos </h3> 
        <TodoForm todos = {todos} addTodo={addTodo} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
    );
}
