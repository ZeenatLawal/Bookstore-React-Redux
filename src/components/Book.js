import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, deleteBook }) => (
  <li>
    <p>{title}</p>
    <p>{author}</p>
    <button type="button" onClick={deleteBook}>Remove</button>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
