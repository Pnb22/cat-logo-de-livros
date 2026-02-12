import { useState } from "react";
import { Book } from "../types/Book";

interface Props {
  onAddBook: (book: Book) => void;
}

export function BookForm({ onAddBook }: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<Book["status"]>("Não lido");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onAddBook({
      title,
      author,
      status
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />

      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Autor"
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value as Book["status"])
        }
      >
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </select>

      <button type="submit">
        Adicionar
      </button>
    </form>
  );
}
