import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookmark, bookmark } from '../actions/index';
import { Book } from '../components/book';

/**
 * @class
 * @name BookmarkContainer
 * @description constructor
 */
class BookmarkContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBookmark()
  }

  renderBookmarks(bookmarks) {
    let items = [];

    Object.keys(bookmarks).forEach((item, key) => {
      items.push(
        <Book
          key={key}
          book={this.props.bookmarks.bookmarks[item]}
          term={''}
          bookmark={this.props.bookmark} />
      )
    });

    return items;
  }

  render() {
    if (this.props.bookmarks.bookmarks !== undefined) {
      return (
        <div>
          { this.renderBookmarks(this.props.bookmarks.bookmarks) }
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
   bookmarks: state.books.bookmarks
 }
}

export default connect(mapStateToProps, { fetchBookmark, bookmark })(BookmarkContainer)
