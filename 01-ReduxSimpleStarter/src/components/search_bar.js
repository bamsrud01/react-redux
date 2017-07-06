//  Import libraries
import React, { Component } from 'react';

//  Create SearchBar component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

//  Export component
export default SearchBar;
