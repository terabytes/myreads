import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({books})
      });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.getAll()
          .then(books => {
            this.setState({
              books: books
            });
          });
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage books={this.state.books} moveBook={this.moveBook}></MainPage>
        )} />
        <Route exact path='/search' render={() => (
          <SearchPage books={this.state.books} moveBook={this.moveBook}></SearchPage>
        )} />
      </div>
    )
  }
};

export default BooksApp
