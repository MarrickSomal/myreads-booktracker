import React, { Component } from 'react'


class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">Shelf Name</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                </ol>
              </div>
            </div>
        )
    }
}
export default BookShelf;