import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, author }) => (
  <li key={id}>
    <p>{title}</p>
    <p>{author}</p>
    <a href="http://localhost:3000/">Remove</a>
  </li>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
