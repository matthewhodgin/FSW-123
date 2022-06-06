import './App.css';
import Todos from './Todos';
import data from './STORE';

const completeTodo = id => {

    
}

const deleteTodo = (id) => {



}



function App() {
    return (
      <>
        <h3> List of Todos </h3> 
        <Todos 
        array = {data} 
        />
      </>
    );
}

export default App;