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
    return authors.map((author) => author).join(' ')
  }

  render() {
    return (
      <div>
        <header className="book__header">
          <h1 className="book__title">{ this.props.book.volumeInfo.title }</h1>

          { this.props.book.volumeInfo.subtitle
            ? `<h2 class="book__subtitle"> ${this.props.book.volumeInfo.subtitle} </h2>`
            : ''
          }

          <small className="book__more-info">
            { this.authorsToString(this.props.book.volumeInfo.authors) }
          </small>

        </header>

        <div className="book__content">
          <img className="book__image" src="{ this.props.book.volumeInfo.imageLinks.thumbnail }"/>
        </div>
      </div>
    )
  }
}
