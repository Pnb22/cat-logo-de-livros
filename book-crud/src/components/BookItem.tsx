import { Book } from "../types/Book";

interface Props {
  book: Book;
  onRemove: (id: string) => void;
}

export function BookItem({ book, onRemove }: Props) {
  return (
    <li>
      {book.title} - {book.author} ({book.status})

      <button onClick={() => onRemove(book._id!)}>
        Remover
      </button>
    </li>
  );
}
