import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';


const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];


class BooksApp extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    userBooks: [],
    searchPageBooks: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
    }

    //filterBooks function retrieves all books relevant to a valid searched query
        
    filterBooks = (query) => {
      /*If the user's query does not match with the book data from the database 
      or is not valid then the state of 'books' is set as an empty array */

      if (query) {
        BooksAPI.search(query).then((bookData) => this.setState({ searchPageBooks: (bookData.error ? [] : bookData) }))
      } else {
        this.setState({searchPageBooks:[]})
      }
    }

    /* function sets search query and search results to empty when the user clicks on the link to the main page
  this means prior search results and queries are not shown if the user clicks on the search page in the future*/
  clearSearchPage = () => {
    this.setState({searchPageBooks:[]})
    this.setState({query:''})
    }


  render() {

    const { userBooks, searchPageBooks } = this.state;

    return (
      <div className="app">
        <Route 
          path= '/search' 
          render ={() => (
            <SearchBooks 
            startSearch={this.filterBooks}
            resetSearch = {this.clearSearchPage}
            searchPageBooks = {searchPageBooks}
            />
        )} />
        <Route 
          exact path='/' 
          render={() => (
          <ListBooks
            userBooks = {userBooks}
            bookshelves = {bookshelves}
          />
          )}
        />
        </div>
      )
  }
}    


export default BooksApp
