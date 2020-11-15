import React, { Component } from 'react'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import { Link } from 'react-router-dom'



class SearchBooks extends Component {


render() {

    const {
        resetSearch,
        startSearch,
        searchPageBooks,
        userBooks,
        updateBookShelf
    } = this.props;

    return (
       <div className="search-books" >
        <div className="search-books-bar">
        <button>
        <Link 
        to= '/'
        className="close-search"
        onClick={resetSearch}
        >Close 
        </Link>
        </button>
        <SearchInput 
        startSearch = {startSearch} 
        />
          </div>
          <SearchResults
          searchPageBooks = {searchPageBooks}
          userBooks = {userBooks}
          updateBookShelf={updateBookShelf}
          />
        </div> 



    )  
}

}

export default SearchBooks;