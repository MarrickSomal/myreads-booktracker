import React, { Component } from 'react'
import Book from './Book';


class SearchResults extends Component {

    render() {

        const { searchPageBooks, updateBookShelf } = this.props

        return (
            <div className="search-books-results">
            <ol className="books-grid">
            {searchPageBooks.map((book) => (
                <Book
                key={book.id}
                book={book}
                shelf = {book.shelf}
                updateBookShelf={updateBookShelf}
                />
            ))}
            </ol>
          </div>
        )
    }
}

export default SearchResults;