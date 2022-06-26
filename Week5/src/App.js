import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [initialQuery, setinitialQuery] = useState("Pie");
  const [inputValue, setInputValue] = useState("")

  const fetchImage = (query = initialQuery) => {
    setLoading(true);
    const encodedQuery = encodeURIComponent(query);
    console.log("Encoded query: ", encodedQuery);
    // API KEY Giphy
    const myKey = "A0HTcSRenI6BnA35DuaKOvCqcF7yCrNI";
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${myKey}&tag=${encodedQuery}&rating=g`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
          setImgSrc(data.data.images.original.url);
          setAlt(data.data.title);
      });
  };

  const handleChange = (e) =>{
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) =>{
    fetchImage(inputValue)
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="App">
      <h3> Giphy </h3>
      <div>
        <img src={imgSrc} alt={alt} />
        <h4> Enter a Word or Phrase: </h4>
      </div>

      <input 
      name="query"
      value={inputValue}
      onChange={handleChange}
      />
      <button onClick = {handleSubmit}> submit </button>

    </div>
  );
}