import axios from "axios";
import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const add = async () => {
    await axios.post("http://localhost:5000/api/books/add",
      { title, author },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") }}
    );
    alert("Book added");
  };

  return (
    <div>
      <h2>Add Book (Admin)</h2>
      <input placeholder="Title" onChange={e=>setTitle(e.target.value)} />
      <input placeholder="Author" onChange={e=>setAuthor(e.target.value)} />
      <button onClick={add}>Add</button>
    </div>
  );
}

export default AddBook;
