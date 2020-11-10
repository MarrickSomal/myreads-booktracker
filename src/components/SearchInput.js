import React, { Component } from 'react'
import {DebounceInput} from 'react-debounce-input';



class SearchInput extends Component {

    state = {
        query: ''
      }

      /* 
        When the user enters text into the input field
        the onChange event listener invokes the updateQuery() function.
        updateQuery() then calls setState(), merging in the new state to update the component's internal state, causing the component to rerender 
        updateQuery() also calls the filterBooks() function
      */
    
     updateQuery = (query) => {
        this.setState(() => ({
          query: query
        }))
        this.props.startSearch(query)
      };

    render() {
        return(
            
           <div className="search-books-input-wrapper" >

                <DebounceInput 
                className="search-books-input"
                placeholder="Search by title or author"
                debounceTimeout={500}
                value= {this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />

            </div>
        )
    }

}

export default SearchInput;
