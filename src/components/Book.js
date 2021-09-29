import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <li key={book.item_id}>
      <p>{book.title}</p>
      <p>{book.category}</p>
      <button type="button" onClick={() => deleteBook(book.item_id)}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
