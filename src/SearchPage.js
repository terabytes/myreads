import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';

class SearchPage extends React.Component {
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery(query) {
    this.setState({
      query: query
    })
    this.updateSearchedBooks(query);
  }

  updateSearchedBooks = (query) => {
    if(query) {
      BooksAPI.search(query)
      .then((searchedBooks) => {
        if(searchedBooks.error) {
          this.setState({
            searchedBooks: []
          });
        } else {
          this.setState({
            searchedBooks
          });
        }
      });
    } else {
      this.setState({
        searchedBooks: []
      })
    }
  }

  render() {
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchedBooks.sort(sortBy('title')).map(searchedBook => {
                let shelf = 'none';
                this.props.books.map(book => {
                  if(book.id === searchedBook.id) {
                    shelf = book.shelf;
                  }
                  return book;
                });
                return (<li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    moveBook={this.props.moveBook}
                    currentShelf={shelf}
                  ></Book>
                </li>);
              })}
              </ol>
            </div>
          </div>
    )
  }
}

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
};

export default SearchPage;