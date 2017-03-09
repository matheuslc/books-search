import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../actions/index';

/**
 * @class
 * @name BookDeatail
 * @description BookDeatail
 */
class BookDetail extends Component {
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
          Ae
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
    book: state.books.book,
    fetching: state.books.fetching
  };
}

export default connect(mapStateToProps, { fetchBook })(BookDetail)
