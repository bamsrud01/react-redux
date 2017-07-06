//  Import libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//  Import components
import SearchBar from './components/search_bar';

//  Declare API key
const API_KEY = 'AIzaSyBGQVFmvElWl2iFDLdBw2xMSw8_rqXf5ZI';

//  Create App component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

//  Render element
ReactDOM.render(<App />, document.querySelector('.container'));
