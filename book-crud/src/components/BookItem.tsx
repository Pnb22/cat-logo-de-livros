import { Book } from "../types/Book";

interface BookItemProps {
  book: Book;
  onRemove: (id: string) => void;
}

export function BookItem({ book, onRemove }: BookItemProps) {
  return (
    <li>
      <strong>{book.title}</strong> — {book.author} ({book.status})

      {book._id && (
        <button onClick={() => onRemove(book._id!)}>
          Remover
        </button>
      )}
    </li>
  );
}
