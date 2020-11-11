import React, { Component } from 'react'
import Book from './Book';

class BookShelf extends Component {

    render() {

      const { userBooks, shelf } = this.props;


      /* filter the book list by the books that having a corresponding shelf designated to */

      const booksOnShelf = userBooks.filter(book => book.shelf === shelf.key);

        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelf.name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {booksOnShelf.map((book) => (
                  <Book 
                    key = {book.id}  
                    book = {book}
                    shelf= {shelf.key}
                  />
                  ))}
                </ol>
              </div>
            </div>
        )
    }
}
export default BookShelf;