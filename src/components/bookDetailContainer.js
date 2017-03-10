import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../actions/index';
import { BookDetails } from './bookDetails';

/**
 * @class
 * @name BookDetailContainer
 * @description constructor
 */
class BookDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBook(this.props.params.bookId)
  }

  render() {
    if (!this.props.fetching) {
      return (
        <div>
          <BookDetails book={this.props.book} />
        </div>
      )
    }

    return (
      <div>Loading</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.books.book,
    fetching: state.books.fetching,
    error: state.error
  };
}

export default connect(mapStateToProps, { fetchBook })(BookDetailContainer)
