import Card from './Card.js';
import './App.css';

function App() {
    return (

      <div class = "flex-container"> 
        < Card className = "card card1" title = "Title 1" subtitle = "Sub Title 1" description = "Hello world 1!" />
        < Card className = "card card2" title = "Title 2" subtitle = "Sub Title 2" description = "Hello world 2!" />
        < Card className = "card card3" title = "Title 3" subtitle = "Sub Title 3" description = "Hello world 3!" />
        < Card className = "card card4" title = "Title 4" subtitle = "Sub Title 4" description = "Hello world 4!" />
      </div>

    );
}

export default App;
