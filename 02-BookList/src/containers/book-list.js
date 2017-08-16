//  Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//  Create class
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

//  Map state to props
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//  Map dispatch to props
function mapDispatchToProps(dispatch) {
  //  Whenever selectBook is called, result is passed to all reducers
  //  Anything returned will be props on BookList container
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//  Export Component
//  Promote BookList from a component to a container
//  Make new methods become props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
