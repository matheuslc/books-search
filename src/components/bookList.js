import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MAX_RESULTS } from '../actions/index';
import { search, bookmark } from '../actions/index';
import { Book } from '../components/book';
import { Pagination } from '../components/pagination';

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
        <div key={book.id} className="col-xs-12 col-md-4 col-lg-3">
          <Book
            book={book}
            term={this.props.term}
            bookmark={this.props.bookmark} />
        </div>
      )
    })
  }

  render() {
    if (!this.props.fetching) {
      return (
        <div className="books row">
          { this.renderBooks() }

          <Pagination
            totalItems={this.props.totalItems}
            maxResult={MAX_RESULTS}
            term={this.props.term}
            search={this.props.search} />
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
    fetching: state.books.fetching,
    totalItems: state.books.totalItems,
    term: state.books.term
  };
}

export default connect(mapStateToProps, { search, bookmark })(BookList)
