import { useState, useEffect } from "react";

export default function searchForm({initalQuery}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    const [alt, setAlt] = useState("");

    const fetchImage = (query = initialQuery) => {
        
        setLoading(true);
        const encodedQuery = encodeURIComponent(query);
        console.log("Encoded query: ", encodedQuery);
        // API KEY Giphy
        const myKey = "A0HTcSRenI6BnA35DuaKOvCqcF7yCrNI";
    }
}

// BrowserRouter

// <Routes>
//   <Route exact = {true} path = '/' element = {<HomePage />} />
//   <Route path = '/seachForm' element={<searchForm />} />
//   <Route path='/search' element={<searchGiphy />} />
// </Routes>

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

