import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BooksList = () => {
  const books = [
    {
      id: uuidv4(),
      title: 'All over',
      author: 'Colleen',
    },
    {
      id: uuidv4(),
      title: 'Ends with us',
      author: 'Colleen Hoover',
    },
    {
      id: uuidv4(),
      title: 'Harry Potter',
      author: 'J.K. Rowling',
    },
  ];

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BooksList;
