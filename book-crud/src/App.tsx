import { useEffect, useState } from "react";
import { Book } from "./types/Book";
import { api } from "./services/api";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  async function loadBooks() {
    const response = await api.get<Book[]>("/");
    setBooks(response.data);
  }

  async function addBook(book: Book) {
    const response = await api.post<Book>("/", book);
    setBooks((prev) => [...prev, response.data]);
  }

  async function removeBook(id: string) {
    await api.delete(`/${id}`);
    setBooks((prev) => prev.filter((book) => book._id !== id));
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h1>📚 Biblioteca</h1>

      <BookForm onAddBook={addBook} />
      <BookList books={books} onRemove={removeBook} />
    </div>
  );
}

export default App;
