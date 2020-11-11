import React, { Component } from 'react'


class BookShelfChanger extends Component {

    render() {
        return (
            <div className="book-shelf-changer">

                                
                              <select 
                                value={this.props.shelf}
                                
                                /*The onChange event listener invokes 
                                the updateBookShelf function passing the book and shelf props as parameters*/

                                onChange={(event) => {this.props.updateBookShelf(this.props.book, event.target.value)}}
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
        )
    }

}

export default BookShelfChanger;