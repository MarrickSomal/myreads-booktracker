import React, { Component } from 'react'


class Book extends Component {


    render() {

        const { book } = this.props

       return (
        <li key={book.id}>
            <div className="book">
                <div className='book-top'>
                {/* ternary conditional added below: if imageLinks data is empty for a book then show nothing, otherwise show the thumbnail value   */}
                    <div 
                    className="book-cover" 
                    
                    style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: ((book.imageLinks) ? `url(${book.imageLinks.thumbnail})` : "") }}></div>
            </div>
            <div className="book-title">{book.title}</div>
                {/* ternary conditional added below: if authors data is empty for a book then show nothing, otherwise show the authors value   */}
            <div className="book-authors">
                {((book.authors) ? book.authors.join(', ') : "")}
                
                </div>
            </div>
        </li>
        )
    }
}

export default Book;