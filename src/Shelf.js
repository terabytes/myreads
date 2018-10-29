import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Shelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelf.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book =>
          <li key={book.id}>
            <Book
              book={book}
              moveBook={props.moveBook}
              currentShelf={props.shelf.value}
            ></Book>
          </li>
        )}
      </ol>
    </div>
  </div>
);


Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
};

export default Shelf;