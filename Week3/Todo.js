function Todos (props) {
    console.log(props)
    console.log(props.array)



const 
    todos: [
        {id: 0, }
    ]
        return (
            <ul>
    
            {
            props.array.map((todo, index) => { 
                return(
                    <li key = {index}>
                    <input type="checkbox" /> 
                    <span> {todo.text} </span>
                    </li>
                )
            }) 
            }
            
            </ul>
        );
    }
    
    export default Todos;