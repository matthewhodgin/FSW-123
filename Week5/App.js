import BrowserRouter from './BrowserRouter';
import {useState} from 'react';
import { searchForm } from './searchForm';

export default function App() {

// function getUserInput() {
//     var inputValue = document
//       .querySelector(".js-userinput").value;
//     return inputValue;
// }

// document.querySelector(".js-go").addEventListener("click", function () {
//     var inputValue = document
//       .querySelector(".js-userinput").value;
//     var userInput = getUserInput();
//     searchGiphy(userInput);
// });

// document.querySelector(".js-userinput")
//   .addEventListener("keyup", function (e) {
  
//   // If the Key Enter is Pressed 
//   if (e.which === 13) { 
//     var userInput = getUserInput();
//     searchGiphy(userInput);
//   }
// });

    return (
      <div className="App">
        <h3> List of Todos </h3> 
        <TodoList todos = {todos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
      </div>
    );
}

//Routes 

BrowserRouter 