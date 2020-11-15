import React, { Component } from 'react'
import Book from './Book';


class SearchResults extends Component {

    render() {

        const { searchPageBooks, userBooks, updateBookShelf } = this.props
        
        /*the below function (stored in the variable reflectBookShelves) maps over 
        the books in search results and for each book it then maps over any added books.
        If there is a match the shelf property is set. */

        const reflectBookShelves = searchPageBooks.map(book => {
    userBooks.map(d => {
      if (d.id === book.id) {
        book.shelf = d.shelf;
      }
      return d;
    });
    return book;

  });

        return (
            <div className="search-books-results">
            <ol className="books-grid">
            {reflectBookShelves.map((book) => (
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