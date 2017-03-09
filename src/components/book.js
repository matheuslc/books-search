import React, { Component } from 'react';

/**
 * @class
 * @name Book
 * @description Book definition
 */
export class Book extends Component {
  constructor(props) {
    super(props);
  }

  authorsToString(authors) {
    if (authors) {
      return authors.map((author) => author).join(' ')
    }

    return '';
  }

  getThumbnail(thumbs) {
    if (thumbs) {
      if (thumbs.smallThumbnail) {
        return thumbs.smallThumbnail
      }

      if (thumbs.thumbnai) {
        return thumbs.thumbnai
      }
    }

    return ''
  }

  render() {
    return (
      <div>
        <header className="book__header">
          <h1 className="book__title">{ this.props.book.volumeInfo.title }</h1>

          { this.props.book.volumeInfo.subtitle
            ? <h2 className="book__subtitle">{ this.props.book.volumeInfo.subtitle }</h2>
            : ''
          }

          <small className="book__more-info">
            { this.authorsToString(this.props.book.volumeInfo.authors) }
          </small>
        </header>

        <button onClick={() => this.props.bookmark(this.props.book)}>Bookmark</button>

        <div className="book__content">
          <img className="book__image" src={ this.getThumbnail(this.props.book.volumeInfo.imageLinks) } />
        </div>
      </div>
    )
  }
}
