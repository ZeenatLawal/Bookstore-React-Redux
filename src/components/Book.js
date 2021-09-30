import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import Progress from './Progress';
import Chapter from './Chapter';
import '../styles/Book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="card flex">
      <div className="book">
        <li key={book.item_id}>
          <p className="bookCategory">{book.category}</p>
          <p className="bookTitle">{book.title}</p>
          <ul className="actions flex">
            <li>Comments</li>
            <li><button type="button" className="rmBtn" onClick={() => deleteBook(book.item_id)}>Remove</button></li>
            <li>Edit</li>
          </ul>
        </li>
      </div>
      <div className="flex">
        <Progress />
        <Chapter />
      </div>
    </div>
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
