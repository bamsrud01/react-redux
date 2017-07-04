//  Import libraries
import React, { Component } from 'react';

//  Create component
class SearchBar extends Component {

  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

//  Export component
export default SearchBar;
