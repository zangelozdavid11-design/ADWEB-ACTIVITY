import axios from "axios";
import { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }).then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>All Books</h2>
      {books.map(b => (
        <p key={b._id}>{b.title} — {b.author}</p>
      ))}
    </div>
  );
}

export default Books;
