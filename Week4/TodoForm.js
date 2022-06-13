const addTodo = text => {
    // make a copy of existing todos stored in state
    // add new todo object to copy
    // update the todos array
  
    const temporaryTodos = [...todos];
    const index = temporaryTodos.findIndex(todo => todo.id === id);
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    addTodo(temporaryTodos)

    
    // local state variable - defined inside of TodoForm
    // function will be defined in app component - passed down like other 2 Functions from pervious (completeTodo / DeleteTodo)
 
  return (
    <div className="App">
      <h3> Todo Form </h3> 
      <TodoForm todos = {todos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
    </div>
  );
  }

export default TodoForm;