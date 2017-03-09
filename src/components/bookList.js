import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search, bookmark } from '../actions/index';
import { Book } from '../components/book';

/**
 * @class
 * @name BookList
 * @description Book List component
 */
class BookList extends Component {
  componentWillMount() {
    this.props.search();
  }

  renderBooks() {
    return this.props.books.map((book) => {
      return (
        <div key={book.id}>
          <Book book={book} bookmark={this.props.bookmark} />
        </div>
      )
    })
  }

  render() {
    if (!this.props.fetching) {
      return (
        <div>
          { this.renderBooks() }
        </div>
      )
    }

    return (
      <div>
        Loading
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
    fetching: state.books.fetching
  };
}

export default connect(mapStateToProps, { search, bookmark })(BookList)
