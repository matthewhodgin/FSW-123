import { useState } from "react";

export default function TodoForm({ submit, text, id }) {
  const initialInputs = { text: text || "" };
  const [inputs, setInputs] = useState(initialInputs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(inputs, id);
    setInputs(initialInputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={inputs.text}
        onChange={handleChange}
        placeholder="Text"
      />
      <button> Add Todo </button>
    </form>
  );
}
