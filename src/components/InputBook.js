import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setInputTitle] = useState('');
  const [category, setInputCategory] = useState('');

  const onTitleChange = (e) => setInputTitle((e.target.value));
  const onCategoryChange = (e) => setInputCategory((e.target.value));

  const handleSubmit = (e) => {
    const book = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(book));
    e.preventDefault();
    setInputTitle('');
    setInputCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Book Title" value={title} onChange={onTitleChange} required />
      <input type="text" name="category" placeholder="Category" value={category} onChange={onCategoryChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default InputBook;
