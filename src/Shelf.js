import React from 'react'
import Book from './Book'

const Shelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book></Book>
      </ol>
    </div>
  </div>
);

export default Shelf;