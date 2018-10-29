import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, currentShelf, moveBook } = props;
  let thumbnail = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '';
  let authors = book.authors ? book.authors.join(' & ') : '';
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{
            width: 128, height: 192,
            backgroundImage: `url(${thumbnail})`
          }}>
        </div>
        <div className="book-shelf-changer">
          <select
            onChange={
              (event) => moveBook(book, event.target.value)
            }
            defaultValue={currentShelf}
          >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  )
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired
};

export default Book;