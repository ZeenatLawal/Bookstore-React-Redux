const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/w6PTwUOXZt5voQWUhhz4/books';

const createBook = async (bookId, title, category) => {
  const result = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookId,
      title,
      category,
    }),
  });

  return result;
};

const getBooks = async () => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};

const removeBook = async (bookId) => {
  const result = await fetch(`${url}/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookId,
    }),
  });

  return result;
};

export default { createBook, getBooks, removeBook };
