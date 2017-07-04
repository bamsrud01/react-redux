//  Import libraries
import React from 'react';
import ReactDOM from 'react-dom';

//  Import components
import SearchBar from './components/search_bar';

//  Declare API key
const API_KEY = 'AIzaSyCVW_HM7t8Tfadc8Tb9JAfrEkNfjn5PboY';

//  Create component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//  Render element
ReactDOM.render(<App />, document.querySelector('.container'));
