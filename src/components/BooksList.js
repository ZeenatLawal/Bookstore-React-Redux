import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../redux/books/books';
import Book from './Book';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.item_id}
            book={book}
          />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
