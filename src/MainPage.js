import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

class MainPage extends React.Component {
  render() {
    const { books, moveBook } = this.props;
    const shelves = [
      { title: 'Currently Reading', value: 'currentlyReading' },
      { title: 'Want to Read', value: 'wantToRead' },
      { title: 'Read', value: 'read' }
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf =>
              <Shelf
                key={shelf.title}
                shelf={shelf}
                books={books.filter(book => book.shelf === shelf.value)}
                moveBook={moveBook}
              ></Shelf>
            )}
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
};

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
};

export default MainPage;