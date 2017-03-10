import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../actions/index';
import { BookDetail } from './bookDetail';

/**
 * @class
 * @name BookDescription
 * @description constructor
 */
class BookDescription extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBook(this.props.params.bookId)
  }

  render() {
    return (
      <BookDetail book={this.props.book} />
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.books.book,
    fetching: state.books.fetching
  };
}

export default connect(mapStateToProps, { fetchBook })(BookDescription)
