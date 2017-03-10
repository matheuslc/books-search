import React, { Component } from 'react';

/**
 * @class
 * @name BookDetails
 * @description BookDetails
 */
export class BookDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.book.hasOwnProperty('id')) {
      return (
        <div className="book-detail">
          <header>
            <h1>{ this.props.book.volumeInfo.title }</h1>
          </header>

          <div className="book-detail__content">
            <div className="book-detail__image">
              {/*<img src={this.props.pickedBook.volumeInfo.imageLinks} />*/}
            </div>

            <div className="book-detail__info">
              <ul>
                <li>{ this.props.book.volumeInfo.authors }</li>
                <li>{ this.props.book.volumeInfo.publisher },
                  { this.props.book.volumeInfo.publishedDate } -
                  { this.props.book.volumeInfo.pageCount }
                </li>
              </ul>
            </div>
          </div>
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
