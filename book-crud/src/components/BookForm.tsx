import { useState, FormEvent } from "react";
import { Book } from "../types/Book";

interface BookFormProps {
  onAddBook: (book: Book) => void;
}

export function BookForm({ onAddBook }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<Book["status"]>("Não lido");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onAddBook({ title, author, status });

    setTitle("");
    setAuthor("");
    setStatus("Não lido");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as Book["status"])}
      >
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </select>

      <button type="submit">Adicionar</button>
    </form>
  );
}
