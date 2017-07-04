//  Import libraries
import React, { Component } from 'react';

//  Create component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return <input onChange={event => this.setState({ term: event.target.value })} />;
  }
}

//  Export component
export default SearchBar;
