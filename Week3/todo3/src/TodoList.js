import Todo from './Todo';

function TodoList (props) {
    console.log(props)
    console.log(props.todos)

    return (
        <ul
        style = {{
            listStyle : "none"
        }}
        >
        {
        props.todos.map((todo, index) => { 
            return(
                <div>
                <Todo 
                key = {index} 
                todo = {todo} 
                completeTodo = {props.completeTodo} 
                deleteTodo = {props.deleteTodo}/>
                </div>
            )
        }) 
        }
        </ul>
    );
    }
    
    export default TodoList;