import { Book } from "../types/Book";
import { BookItem } from "./BookItem";

interface Props {
  books: Book[];
  onRemove: (id: string) => void;
}

export function BookList({ books, onRemove }: Props) {
  return (
    <div>
      <h2>Lista de Livros</h2>

      <ul>
        {books.map((book) => (
          <BookItem
            key={book._id}
            book={book}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
}
