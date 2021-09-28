import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputBook = (props) => {
  const [inputBook, setInputBook] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputBook({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBook(inputBook);
    setInputBook({
      title: '',
      author: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Book Title" value={inputBook.title} onChange={onChange} required />
      <input type="text" name="author" placeholder="Book Author" value={inputBook.author} onChange={onChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

InputBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default InputBook;
