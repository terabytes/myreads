import React from 'react'
import Shelf from './Shelf'

const MainPage = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {[
          'Currently Reading',
          'Want to Read',
          'Read'
        ].map(shelfTitle =>
          <Shelf shelfTitle={shelfTitle}></Shelf>
        )}
      </div>
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    </div>
  </div>
);

export default MainPage;