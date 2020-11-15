import React, { Component } from 'react'
import Book from './Book';


class SearchResults extends Component {

    render() {

        const { searchPageBooks, userBooks, updateBookShelf } = this.props
        const displayBookShelves = searchPageBooks.map(book => {
    userBooks.map(d => {
      if (d.id === book.id) {
        book.shelf = b.shelf;
      }
      return d;
    });
    return book;

        return (
            <div className="search-books-results">
            <ol className="books-grid">
            {searchPageBooks.map((book) => (
                <Book
                key={book.id}
                book={book}
                shelf = {book.shelf ? book.shelf : "none"}
                updateBookShelf={updateBookShelf}
                />
            ))}
            </ol>
          </div>
        )
    }
}

export default SearchResults;